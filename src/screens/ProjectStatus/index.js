import React from "react";
import { Header, Segment } from 'semantic-ui-react'
import { Icon , Feed} from 'semantic-ui-react'
import { Button, Confirm, Message } from 'semantic-ui-react'
import {Timeline, TimelineEvent} from 'react-event-timeline'

const MessageExampleIconProp = () => (
  <Message
    icon='chevron circle left'
    header='Have you heard about our mailing list?'
    content='Get the best news in your e-mail every day.'
  />
)

const chevron_circle_left = () => (
    <div>
      <button class="my-icon">
         <Icon name='chevron circle left' attached='top' size='big'/>
      </button>
    </div>
)

const mudanca_icon = () => (
    <i style={{color:"gray", fontSize:"60px", lineHeight:"1.2", width: "1.5em"}} class="exchange icon"></i>
)

const chat_icon = () => (
    <i style={{color:"gray", fontSize:"60px", lineHeight:"1.2", width: "1.5em"}} class="comments outline icon"></i>
)

const design_icon = () => (
    <i style={{color:"gray", fontSize:"55px", lineHeight:"1.4", width: "1.5em"}} class="paint brush icon"></i>
)

const cobranca_icon = () => (
    <i style={{color:"gray", fontSize:"50px", lineHeight:"1.5", width: "1.50em"}} class="hourglass end icon"></i>
)

const calendar_icon = () => (
    <i style={{color:"gray", fontSize:"50px", lineHeight:"1.5", width: "1.50em"}} class="calendar icon"></i>
)

export default class ProjectStatus extends React.Component {

    style={
        teste:{color:"gray", fontSize:"30px"},
    }
  render() {
  return (
        <div>
          <div class="container">
            {chevron_circle_left()}
            <h1>
                Histórico de Edições:
            </h1>
            <span class="tab"></span>
            <h1 class="Name_Project">
                Grande Portal
            </h1>
          </div>

          <section>
            <div class="barra_vertical"></div>
            <div class="ramo1">
              <div class="box1">
                {mudanca_icon()}
              </div>
              <div class="modulo_texto_ramo1">
                  <div class="text1">2018-05-24 10:06 PM</div>
                  <div class="text2">
                    <div style={{color:"blue", fontSize:"30px"}}>Luiz Guilherme</div>
                    <span class="tab" ></span>
                    <div style={{...this.style.teste}}>alterou o entregável 3</div>
                  </div>
              </div>
            </div>
            <div class="ramo1">
              <div class="box2">
                {chat_icon()}
              </div>
              <div class="modulo_texto_ramo2">
                  <div class="text1">2018-05-22 04:27 AM</div>
                  <div class="text2">
                    <div style={{color:"green", fontSize:"30px"}}>Felipe Pessina</div>
                    <span class="tab" ></span>
                    <div style={{...this.style.teste}}>lhe enviou uma mensagem</div>
                  </div>
              </div>
            </div>
            <div class="ramo1">
              <div class="box3">
                {design_icon()}
              </div>
              <div class="modulo_texto_ramo3">
                  <div class="text1">2018-05-18 09:40 PM</div>
                  <div class="text2">
                    <div style={{color:"#bb9533", fontSize:"30px"}}>João Victor</div>
                    <span class="tab" ></span>
                    <div style={{...this.style.teste}}>completou o design do projeto</div>
                  </div>
              </div>
            </div>
            <div class="ramo1">
              <div class="box4">
                {cobranca_icon()}
              </div>
              <div class="modulo_texto_ramo4">
                  <div class="text1">2018-05-07 08:21 AM</div>
                  <div class="text2">
                    <div style={{color:"#2f3668", fontSize:"30px"}}>Rogério</div>
                    <span class="tab" ></span>
                    <div style={{...this.style.teste}}>te cobrou da Sprint 4</div>
                  </div>
              </div>
            </div>
            <div class="ramo1">
              <div class="box5">
                {calendar_icon()}
              </div>
              <div class="modulo_texto_ramo5">
                  <div class="text1">2018-04-29 10:07 AM</div>
                  <div class="text2">
                    <div style={{color:"#ea1a7c", fontSize:"30px"}}>Bernardo</div>
                    <span class="tab" ></span>
                    <div style={{...this.style.teste}}>marcou um evento em seu calendário</div>
                  </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}
