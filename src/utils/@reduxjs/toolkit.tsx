import { RootStateKeyType } from '../types/injector-typings';
import { createSlice as createSliceOriginal, CreateSliceOptions, SliceCaseReducers, } from '@reduxjs/toolkit';

/* Wrap createSlice with stricter Name options */

/* istanbul ignore next */

export const createSlice = <State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends RootStateKeyType,
  >(
  // @ts-ignore
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
  // @ts-ignore
  return createSliceOriginal(options);
};
