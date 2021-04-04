import { Div, Text, Icon, Image, Button } from 'atomize'
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

  const removePhoto = (blob) => {
    let _imagesToShow = imagesToShow.filter((item) => item !== blob)
    setImagesToShow(_imagesToShow)
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

      {
        imagesToShow.length == 0 ?
          <Div onClick={handleUpdateImage} m={{ t: '1rem' }} bg='white' w='100%' h='10rem' d='flex' justify='center' align='center' cursor='pointer'>
            <Center>
              <Icon name='CameraSolid' size='40px' color='gray4' />
              <Text textColor='gray2'> {t('product.attributes.photos')} </Text>
            </Center>
          </Div>
        :
          <Div d='flex' justify='center'>
            {
              imagesToShow.map((image, index) => {
                return(
                  <Div m={{ x: '2%' }}>
                    <Div rounded='5px' shadow='2' w='6rem' h='8rem' d='flex' justify='center' align='center' bg='gray6' overflow='hidden'>
                      <Image src={image} alt='Product image' style={{width: '5rem'}} />
                    </Div>
                    <Center>
                      <Icon onClick={() => removePhoto(image)} m={{ t: '5%' }} name='Close' size='20px' color='red' />
                    </Center>
                  </Div>
                )
              })
            }

            <Div m={{ x: '2%' }}>
              <Div onClick={handleUpdateImage} rounded='5px' w='6rem' h='8rem' d='flex' justify='center' align='center' hoverShadow='3' cursor='pointer'>
                <Icon name='CameraSolid' size='40px' color='gray4' />
              </Div>
            </Div>
          </Div>
      }
    </Div>
  )
}
