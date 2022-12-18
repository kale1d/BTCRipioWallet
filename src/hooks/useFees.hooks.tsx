import { useEffect } from 'react';
import { useCallback } from 'react';
import apiFeesService from '../api/apiFees.service';
import { useStore } from '../store';
import { Types } from '../store/types';

export const useFees = () => {
  const { state, dispatch } = useStore();
  const { fees } = state;

  const getFees = useCallback(async () => {
    try {
      const data = await apiFeesService.getFees();
      dispatch({ type: Types.setFees, payload: data });
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!fees.length) {
      getFees();
    }
  }, [fees.length, getFees]);

  return {
    fees,
  };
};
