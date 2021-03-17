import React from 'react'
import { Div, Text, Tag, Icon } from 'atomize'
import Link from 'next/link'
import { DateParser } from '../../utils'

interface SidebarItemProps {
  title: string
  link: string
}

export const Sidebar: React.FC = () => {
  const dateParser = new DateParser

  return(
    <Div w='15%' h='100vh' bg='gray6'>
      <Div w='100%' h='10%'>
        <Div h='100%' p={{ x: '3%' }} d='flex' flexDir='column' justify='center' align='center'>
          <Div w='100%' h='100%' d='flex' justify='space-between' align='center'>
            <Tag shadow='2' bg='white' textColor='primary' rounded='circle' p={{ x: '1.5rem' }} textSize='body'> { dateParser.clockString() } </Tag>
            <Tag shadow='2' bg='white' textColor='red' rounded='circle' p={{ x: '1.5rem' }} textSize='body'> Beta </Tag>
          </Div>
        </Div>
      </Div>

      <Div w='100%' h='83%'>
        <SidebarItem title='Dashboard' link='/' />
        <SidebarItem title='Produtos' link='/Products' />
        <SidebarItem title='Vendas' link='/Orders' />
        <SidebarItem title='Minha Conta' link='/Account' />
        <SidebarItem title='Minha Loja' link='/Store' />
      </Div>

      <Div w='100%' h='7%' d='flex' justify='center' align='center'>
        <Tag cursor='pointer' shadow='3' hoverShadow='1' bg='white' textColor='blue' rounded='circle' p={{ x: '1.5rem' }} textSize='body'> Sair </Tag>
      </Div>
    </Div>
  )
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, link }) => {
  return(
    <Link href={link}>
      <Div
        border={{ y: '1px solid' }}
        borderColor='gray6'
        d='flex'
        justify='space-between'
        align='center'
        w='100%'
        bg='white'
        hoverBg='gray6'
        p={{ x: '.5rem', y: '.5rem' }}
        cursor='pointer'
      >
        <Text> { title } </Text>
        <Icon name='RightArrow' size='20px' color='blue' />
      </Div>
    </Link>
  )
}