import React, {useContext} from 'react'
import { ToStart } from './ToStart'
import { InProgress } from './InProgress'
import { Done } from './Done'
import { Section, DivUp, DivBotton, DivFavorites, DivSingleFavorite, P, DivGroupFavorites, DivContainer, TitleCreateTodo } from '../styles/Body'
import { CreateTask } from './CreateTask'
import { Favorites } from './Favorites'
import { CountFavorites } from './CountFavorites'
import Context from '../context/Context'
import {Modal} from './Modal'
import HeadBodyGrid from '../services/loader'

export const Body = () => {
    const {isOpenModal, item, loading, error, progress} = useContext(Context);

  return (
    <DivContainer>
        {isOpenModal && <Modal></Modal>}
        <Section isOpenModal={isOpenModal}>
            <DivUp>
                <CreateTask></CreateTask>
                <DivFavorites>
                    <DivSingleFavorite>
                        <P>Favorites</P>
                        <DivGroupFavorites>
                            {[0, 1, 2, 4, 5, 6].map((favorite, index) => <Favorites key={index} id={index}></Favorites>)}
                        </DivGroupFavorites>
                    </DivSingleFavorite>
                    <CountFavorites></CountFavorites>
                </DivFavorites>
            </DivUp>
            <DivBotton>
                {item.length < 1 && progress.length < 1 ? <TitleCreateTodo>Crea tu primer Todo..</TitleCreateTodo> : 
                    <>
                        <div>
                            <h3>To Start</h3>
                            {loading ? <HeadBodyGrid></HeadBodyGrid> : item.map((todo, index) => (
                                <ToStart todo={todo} key={index}></ToStart>
                            ))}
                        </div>
                        <div>
                            <h3>InProgress</h3>
                            {progress.map((progressSingle, index) => <InProgress key={index} progress={progressSingle}></InProgress>)}
                        </div>
                        <div>
                            <h3>Done</h3>
                            <Done></Done>
                        </div>
                    </>
                }
            </DivBotton>
        </Section>
    </DivContainer>
  )
}
