export const UPDATE_TAGS = 'tags/UPDATE_TAGS';
export const SET_TAGS = 'tags/SET_TAGS';
export const ADD_TAG = 'tags/ADD_TAG';
export const DELETE_TAG = 'tags/DELETE_TAG';

export function updateTags (tags) {
  return {
    type: UPDATE_TAGS,
    tags
  }
}

export function setTags (tags) {
  return {
    type: SET_TAGS,
    tags: tags
  }
}

export function addTag (tag) {
  return {
    type: ADD_TAG,
    tag
  }
}

export function deleteTag (tag) {
  return {
    type: DELETE_TAG,
    tag
  }
}