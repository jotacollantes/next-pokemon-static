import {Spacer, Text, useTheme,Image,Link as LinkNextUi } from '@nextui-org/react'
import NextLink from 'next/link'


export const Navbar = () => {
    //*  llamo al hook useTheme de Nextui
    const {theme}=useTheme()
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0x 20px',
        backgroundColor: theme?.colors.gray900.value
    }}
    >
        <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt='Icono de la app'
        width={70}
        height={70}
        />
        

        <NextLink href="/" passHref>
              {/* <LinkNextUi> */}
                {/* <Text color='white' h2>P</Text> */}
                <Text color='black' h3>Pokémon</Text>
              {/* </LinkNextUi> */}
        </NextLink>
        
       
        
        
        
        
        <Spacer css={{flex:1}}/>
        
        <NextLink href="/favorites" passHref>
          {/* <LinkNextUi> */}
          <Text css={{marginRight:10}} color='black' h3>Favoritos</Text>
          {/* </LinkNextUi> */}
        </NextLink>
        
        
        

    </div>
  )
}
