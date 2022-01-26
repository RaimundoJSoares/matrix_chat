import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState('');
  const [listademensagens, setListademensagens] = React.useState([]);

  function handleNovaMensagem (novaMensagem){
    const mensagem = {
      id:listademensagens.length + 1,
      de: 'Eu',
      texto: novaMensagem,
    }
    setListademensagens([
      mensagem,
      ...listademensagens, 
    ]);
    setMensagem('')
  }

    // Sua lógica vai 
    /* 
    //usuario
    -usuário digita no campo textarea
    -aperta enter para enviar
    -tem que adicionar o texto na listagem

    //DEV
    -campo criado
    - Vamos usar o onChange usa o useState(ter if para caso seja enter para limpar a variavel)
    - lista de mensagens

    */

    // ./Sua lógica vai aqui
    return (
             
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVlzKD23OxpLNPSQfpD09vfHmkIAQNd_c4Nyeiy0w9bsnsmk-Q_hMrHz4hnHMlAqviLxw3a0CqB30ztmXLEWhfExFO3X.jpg?r=93a)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens = {listademensagens} /> 
                    {//listademensagens.map(() => {console.log(mensagematual)
                      //return(
                      //  <li key={mensagematual.id}>
                      //    {mensagematual.de} : {mensagematual.texto}
                     //     </li>
                      //)
                   // })}
                        
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event)=> {setMensagem(event.target.value)}}
                            onKeyPress={(event)=> {
                              if(event.key === 'Enter') {
                                event.preventDefault();
                                handleNovaMensagem(mensagem);
                              }
                            }}

                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Box>
                            <Button
                                variant='tertiary'
                                colorVariant='neutral'
                                label='Enviar'
                                onChange={(event) => {
                                    const valor = event.target.value
                                    setMensagem(valor);
                                }}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem)
                                }}
                            />
                        </Box>
                    </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log('MessageList', props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
              return (
                <Text
                key={mensagem.id}
                tag="li"
                styleSheet={{
                    wordBreak: 'break-word',
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }
                }}
            >
                <Box
                    styleSheet={{
                        marginBottom: '8px',
                    }}
                >
                    <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }}
                        src={`https://github.com/raimundojSoares.png`}
                    />
                    <Text tag="strong">
                    {mensagem.de}
                    </Text>
                    <Text
                        styleSheet={{
                            fontSize: '10px',
                            marginLeft: '8px',
                            color: appConfig.theme.colors.neutrals[300],
                        }}
                        tag="span"
                    >
                        {(new Date().toLocaleDateString())}
                    </Text>
                </Box>
                {mensagem.texto}
            </Text>
              )
            })}
           
        </Box>
    )
}