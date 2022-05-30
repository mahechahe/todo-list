import React from 'react'
import { Icon } from './Icon'
import { Section, DivIcons, DivIconsUp, Title, DivFooter, DivIconFooter, DivInput } from '../styles/Nav';
import { AiOutlineMessage, AiOutlineNumber, AiOutlineMobile, AiOutlineSetting, AiOutlineHighlight, AiOutlineSound, AiOutlineFolder, AiOutlineVerticalLeft, AiOutlineFolderOpen,  } from "react-icons/ai";
import { Input } from './Input';

export const Nav = () => {

  return (
    <Section>
        <DivInput>
            <Input></Input>
        </DivInput>
        <DivIcons>
            <DivIconsUp>
                <Title>Daily Todo List</Title>
                <Icon Icon={AiOutlineNumber} BodyIcon={'Teams'}></Icon>
                <Icon Icon={AiOutlineMessage} BodyIcon={'Team Chat'}></Icon>
                <Icon Icon={AiOutlineHighlight} BodyIcon={'Design Tasks'}></Icon>
                <Icon Icon={AiOutlineSound} BodyIcon={'Notification'}></Icon>
                <Icon Icon={AiOutlineMobile} BodyIcon={'Mobile'}></Icon>
            </DivIconsUp>
            <DivIconsUp>
                <Title>Design Folders</Title>
                <Icon Icon={AiOutlineFolder} BodyIcon={'UI Components'}></Icon>
                <Icon Icon={AiOutlineFolder} BodyIcon={'Styledguide'}></Icon>
                <Icon Icon={AiOutlineFolder} BodyIcon={'Branding'}></Icon>
            </DivIconsUp>
        </DivIcons>
        <DivFooter>
            <DivIconFooter><AiOutlineSetting size={'22px'}></AiOutlineSetting></DivIconFooter>
            <DivIconFooter><AiOutlineFolderOpen size={'22px'}></AiOutlineFolderOpen></DivIconFooter>
            <DivIconFooter><AiOutlineVerticalLeft size={'22px'}></AiOutlineVerticalLeft></DivIconFooter>
        </DivFooter>
    </Section>
    
  )
}
