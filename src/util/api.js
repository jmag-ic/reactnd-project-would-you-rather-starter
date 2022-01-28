import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export function answerQuestion(answerData) {
  return _saveQuestionAnswer(answerData);
}

export function createQuestion(question) {
  return _saveQuestion(question);
}

export function getUsers() {
  return _getUsers();
}

export function getQuestions() {
  return _getQuestions();
}