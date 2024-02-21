import axios from 'axios';
import { API_ENDPOINT, BACK_ROUTES } from 'app-constants';
import { ILocalStorage } from 'types';
import { getError } from 'utils/helpers';

export const postAnswers = async (bodyData: ILocalStorage[]) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}${BACK_ROUTES.answers}`,
      bodyData,
    );
    return { res: response };
  } catch(error: any) {
    getError(error);

    return { res: null };
  }
};
