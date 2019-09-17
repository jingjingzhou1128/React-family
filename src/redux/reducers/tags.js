import {UPDATE_TAGS, CLEAR_TAGS, ADD_TAG, DELETE_TAG} from '@/redux/actions/tags';

/**
 * init state
 */
const initState = {
  tags: []
}

function updateTags (state, tags) {
  let filterTags = tags.filter(tag => {
    return !state.tags.some(item => item.path === tag.path)
  })
  return [...state.tags, ...filterTags]
}

function deleteTag (state, tag) {
  return state.tags.filter(item => item.path !== tag.path)
}

function addTag (state, tag) {
  if (!state.tags.some(item => item.path === tag.path)) {
    state.tags.push(tag)
  }
  return [...state.tags]
}

function clearTag (state) {
  return state.tags.filter(item => {
    return item.isAffix
  })
}

/**
 * reducer
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_TAGS:
      return {
        ...state,
        tags: updateTags(state, action.tags)
      }
    case CLEAR_TAGS:
      return {
        ...state,
        tags: clearTag(state)
      }
    case ADD_TAG:
      return {
        ...state,
        tags: addTag(state, action.tag)
      }
    case DELETE_TAG:
      return {
        ...state,
        tags: deleteTag(state, action.tag)
      }
    default:
      return state
  }
}