
import _ from 'lodash'

export const splitItemsByRow = (items, isIconType) => {
  if (!items || items.length === 0) {
    return []
  }

  // 5 items per row if isIconType is true
  // otherwise 3 items per row
  const maxByRow = (isIconType) ? 5 : 3
  const itemsByRow = _.chunk(items, maxByRow)

  // Add empty skills to last chunk if last chunk has less than maxByRow
  const chunks = itemsByRow.length
  const countInLastChunk = (chunks > 0) ? itemsByRow[chunks - 1].length : 0
  if (countInLastChunk > 0) {
    for (let i = countInLastChunk; i < maxByRow; i++) {
      itemsByRow[chunks - 1].push(null)
    }
  }

  return itemsByRow
}
