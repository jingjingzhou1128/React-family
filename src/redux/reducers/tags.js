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

/**
 * reducer
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_TAGS:
      return {
        tags: updateTags(state, action.tags)
      }
    case CLEAR_TAGS:
      return {
        tags: []
      }
    case ADD_TAG:
      return {
        tags: addTag(state, action.tag)
      }
    case DELETE_TAG:
      return {
        tags: deleteTag(state, action.tag)
      }
    default:
      return state
  }
}