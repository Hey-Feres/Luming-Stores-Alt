import { Div, Text, Icon } from 'atomize'
import { Center } from '../'
import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import '../../config/locales/i18n'

// estamos recebendo a função de setImage que virá do ProductForm, necessitamos dela pois vamos mandar o arquivo para a api e para exibir a imagem na tela utilizaremos o método Url.createObjectUrl que irá criar uma url fictícia para a imagem e assim a mesma será exibida na tela.
// já o productImage será utilizado para exibir a image que foi recebida da api na edição do produto
interface Props {
  setImage: Dispatch<SetStateAction<File>>
  image: string
}

export const FileUploader: React.FC<Props> = ({ setImage, image }) => {
  const { t } = useTranslation()
  // esse estado é utilizado para armazenar a url da imagem que será exibida na tela
  const [imageToShow, setImageToShow] = useState('')
  // utilizarames um ref hook do react para podermos ter acesso mais fácil ao input do tipo file que esta escondido na tela.
  const imageInputRef = useRef(null)

  // se for uma edição e imagem do produto existir, a imagem será alterada para a imagem do produto
  useEffect (() => {
    if (image) {
      setImageToShow(image)
    }
  }, [image])

  // utilizando um ref para simular o click do botão do input type='file' quando o botão atualizar é clicado
  const handleUpdateImage = (): void => {
    if (imageInputRef) {
      imageInputRef.current.click()
    }
  }

  // pegando a imagem que foi selecionada, setando ela no estado do componente pai e criando uma url para que a mesma seja exibida na tela
  const handleSetImage = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files[0]

    setImage(file)
    setImageToShow(URL.createObjectURL(file))
  }

  return (
    <Div>
      <label htmlFor='image'>
        <input
          type='file'
          id='image'
          name='product_image'
          hidden
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
            imageToShow == '' ?
            <>
              <Icon name='CameraSolid' size='40px' color='gray4' />
              <Text textColor='gray2'> {t('product.attributes.photos')} </Text>
            </>
            :
            <img src={imageToShow} alt='Product image' style={{width: '150px'}} />
          }
        </Center>
      </Div>
    </Div>
  )
}
