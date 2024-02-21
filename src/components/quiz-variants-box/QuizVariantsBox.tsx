import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'components';
import { useLocalStorage, useQuizNavigate } from 'utils/hooks';
import { getLocaleLang } from 'utils/helpers';
import { ILocalStorage, INPUT_TYPE, TVariant, ROUTES } from 'types';
import { QUIZ_TYPE } from 'app-constants';
import styles from './QuizVariantsBox.module.scss';

interface IProps {
  title: string;
  variants: TVariant[];
  slug: string;
  lang: string | undefined;
}

export const QuizVariantsBox = (props: IProps) => {
  const { variants, slug, lang, title } = props;

  const { handleNavigate, handleNavigateWrapper } = useQuizNavigate();
  const { setLocalItem, getLocalItem, removeLocalItem } = useLocalStorage();
  const { t } = useTranslation();

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
      slug === ROUTES.quizLang ? getLocaleLang(variants, item) : lang;

    if (slug.includes(ROUTES.quizLang)) {
      removeLocalItem();
    }

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
        {variants.map((quizItem: TVariant, index: number) => (
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

      {QUIZ_TYPE[slug as keyof typeof QUIZ_TYPE] === INPUT_TYPE.checkbox && (
        <Button
          type="button"
          text={t('button.next')}
          handleClick={handleNavigateWrapper}
          disabled={checkedItem.length < 2}
        />
      )}
    </div>
  );
};
