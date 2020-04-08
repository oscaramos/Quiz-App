import { createSelector } from 'reselect';

const selectQuiz = state => state.quiz;

export const selectQuizResults = createSelector(
  [selectQuiz],
  state => state.results
)

export const selectQuizCurrentQuestion = createSelector(
  [selectQuiz],
  state => state.currentQuestion
)

export const selectQuizCorrectAnswers = createSelector(
  [selectQuiz],
  state => state.correctAnswers
)
export const selectQuizTime = createSelector(
  [selectQuiz],
  state => state.time
)
