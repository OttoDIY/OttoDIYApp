import {Image} from 'react-native'

import {Metrics} from 'App/Themes'

export const getImageSize = (imageUri) => {
  return new Promise((resolve, reject) => {
    Image.getSize(imageUri,
      (width, height) => {
        const maxWidth = Metrics.screenWidth - (Metrics.unit * 4)
        const size = (maxWidth < width)
          ? { width: maxWidth, height: height * (maxWidth / width) }
          : { width, height }
        resolve(size)
      },
      reject)
  })
}
