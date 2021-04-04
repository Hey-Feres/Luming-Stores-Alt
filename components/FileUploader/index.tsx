import { Div, Text, Icon } from 'atomize'
import { Center } from '../'
import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import '../../config/locales/i18n'

interface Props {
  setPreview: Dispatch<SetStateAction<File[]>>
  preview: File[]
}

export const FileUploader: React.FC<Props> = ({ setPreview, preview }) => {
  const { t } = useTranslation()
  const [imagesToShow, setImagesToShow] = useState([])
  const imageInputRef = useRef(null)

  // useEffect (() => {
  //   if (preview) {
  //     setImagesToShow(preview)
  //   }
  // }, [preview])

  const handleUpdateImage = (): void => {
    if (imageInputRef) {
      imageInputRef.current.click()
    }
  }

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files
    let filesForPreview = []
    let filesToDisplay = []

    for (let i = 0; i < files.length; i++) {
      filesForPreview.push(files[i])
    }

    setPreview(filesForPreview)

    for (let i = 0; i < filesForPreview.length; i++) {
      filesToDisplay.push(URL.createObjectURL(filesForPreview[i]))
    }
    setImagesToShow(filesToDisplay)
  }

  return (
    <Div>
      <label htmlFor='image'>
        <input
          type='file'
          id='image'
          name='product_image'
          hidden
          multiple
          ref={imageInputRef}
          onChange={
            (evt: React.ChangeEvent<HTMLInputElement>) =>
              handleSetImage(evt)
          }
        />
      </label>

      <Div onClick={handleUpdateImage} m={{ t: '1rem' }} bg='white' shadow='3' hoverShadow='2' rounded='10px' w='100%' h='10rem' d='flex' justify='center' align='center' cursor='pointer'>
        <Center>
          {
            imagesToShow.length == 0 ?
            <>
              <Icon name='CameraSolid' size='40px' color='gray4' />
              <Text textColor='gray2'> {t('product.attributes.photos')} </Text>
            </>
            :
            imagesToShow.map(image => {
              return <img src={image} alt='Product image' style={{width: '150px'}} />
            })
          }
        </Center>
      </Div>
    </Div>
  )
}
