import { Div, Text, Icon, Image, Button } from 'atomize'
import { Center } from '../'
import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import '../../config/locales/i18n'

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>
  files: File[]
}

export const FileUploader: React.FC<Props> = ({ setFiles, files }) => {
  const { t } = useTranslation()
  const [filesPreview, setFilesPreview] = useState([])
  const imageInputRef = useRef(null)

  // useEffect (() => {
  //   if (preview) {
  //     setImagesToShow(preview)
  //   }
  // }, [preview])

  const handleUpdateImage = (): void => { if (imageInputRef) imageInputRef.current.click() }

  const removePhoto = (blob: string) => setFilesPreview(filesPreview.filter((item) => item !== blob))

  const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newFiles = event.target.files

    let selectedFiles = files
    for (let i = 0; i < newFiles.length; i++) {
      selectedFiles.push(newFiles[i])
    }
    setFiles(selectedFiles)

    let filesPreview = []
    for (let i = 0; i < selectedFiles.length; i++) {
      filesPreview.push(URL.createObjectURL(selectedFiles[i]))
    }
    setFilesPreview(filesPreview)
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
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetImage(evt)}
        />
      </label>

      {
        filesPreview.length == 0 ?
          <Div onClick={handleUpdateImage} m={{ t: '1rem' }} bg='white' w='100%' h='10rem' d='flex' justify='center' align='center' cursor='pointer'>
            <Center>
              <Icon name='CameraSolid' size='40px' color='gray4' />
              <Text textColor='gray2'> {t('product.attributes.photos')} </Text>
            </Center>
          </Div>
        :
          <Div d='flex' justify='center'>
            {
              filesPreview.map((image, index) => {
                return(
                  <Div m={{ x: '2%' }}>
                    <Div rounded='5px' shadow='2' w='6rem' h='8rem' d='flex' justify='center' align='center' bg='gray6' overflow='hidden'>
                      <Image src={image} alt='Product image' style={{width: '5rem'}} />
                    </Div>
                    <Center>
                      <Icon onClick={() => removePhoto(image)} m={{ t: '5%' }} name='Close' size='20px' color='red' cursor='pointer' />
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
