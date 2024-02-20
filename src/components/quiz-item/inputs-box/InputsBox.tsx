import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Input } from 'components';
import { ILocalStorage, INPUT_TYPE, ROUTES } from 'types';
import { useLocalStorage, useQuizNavigate } from 'hooks';
import { QUIZ_TYPE } from 'app-constants';
import styles from './InputsBox.module.scss';

interface IProps {
  title: string;
  variants: any[];
  slug: string;
  lang: string | undefined;
}

export const InputsBox = (props: IProps) => {
  const { variants, slug, lang, title } = props;
  const { handleNavigate } = useQuizNavigate();
  const { setLocalItem, getLocalItem } = useLocalStorage();

  const [checkedItem, setCheckedItem] = useState<string[]>([]);

  useEffect(() => {
    setCheckedItem(
      getLocalItem().find((item: ILocalStorage) => item.title === title)
        ?.answer || [],
    );
  }, [title]);

  const handleChooseRadio = (item: string) => {
    setCheckedItem([item]);

    const locale =
      slug === ROUTES.quizLang
        ? variants.find((variant: any) => variant.text === item).route
        : lang;

    setLocalItem({
      title,
      answer: [item],
      type: slug === ROUTES.quizAge ? 'single-select-image' : 'single-select',
    });

    handleNavigate(locale);
  };

  const handleSelectCheckbox = (item: string) => {
    let newItems = checkedItem;

    if (checkedItem.includes(item)) {
      newItems = newItems.filter((checked) => checked !== item);
    } else {
      newItems = [...newItems, item];
    }

    setCheckedItem(newItems);
    setLocalItem({
      title,
      answer: newItems,
      type: slug === ROUTES.quizTopics ? 'bubble' : 'multiple-select',
    });
  };

  const handleChange = (item: string) => {
    switch (QUIZ_TYPE[slug as keyof typeof QUIZ_TYPE]) {
      case INPUT_TYPE.checkbox:
        handleSelectCheckbox(item);
        break;
      case INPUT_TYPE.radio:
        handleChooseRadio(item);
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.inputsBox}>
      <div
        className={classNames(
          styles.inputsBox__inputList,
          styles[`inputsBox__inputList_${slug}`],
        )}
      >
        {variants.map((quizItem: any, index: number) => (
          <Input
            key={index}
            type={QUIZ_TYPE[slug as keyof typeof QUIZ_TYPE]}
            name={typeof quizItem === 'string' ? quizItem : quizItem.text}
            value={typeof quizItem === 'string' ? quizItem : quizItem.text}
            checked={checkedItem.includes(
              typeof quizItem === 'string' ? quizItem : quizItem.text,
            )}
            isBubble={slug === ROUTES.quizTopics}
            icon={typeof quizItem !== 'string' ? quizItem.icon : undefined}
            setValue={handleChange}
          />
        ))}
      </div>
    </div>
  );
};
