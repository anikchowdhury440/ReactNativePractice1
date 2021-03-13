import React from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import HomeScreenStyles from './HomeScreenStyles.scss'
import { Worker } from 'rn-workers'

export default class HomeScreen extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        member : [],
        name : '',
        isMember : ''
      }
    }
    componentDidMount = () => {
      this.worker = new Worker("worker.js")
      this.worker.onmessage = (event) => {
        // console.log('event', event)
      }
    }

    press = () => {
      if(this.state.isMember.toLowerCase() == "n") {
        this.worker.postMessage('Hello World')
        console.log(this.state.member)
      } else {
        const member = this.state.member;
        member.push(this.state.name)
        this.setState({member : member})
      }
    }

    handleName = (name) => {
      this.setState({ name : name})
    }

    handleMember = (isMember) => {
      this.setState({ isMember : isMember})
    }
    
    render() {
      return (
          <View style = {HomeScreenStyles.container}>
              {/* <Text style = {HomeScreenStyles.text_welcome_back}>Welcome back!</Text>
              <Text style = {HomeScreenStyles.text_description}>BridgeLabz Learner Management System. We Guarantee your Dream Job</Text>
              <View style = {HomeScreenStyles.view}>
              <TextInput
                  style = {HomeScreenStyles.textinput}
                  placeholder = "Enter Email"
              />
              </View>
              <Text style = {HomeScreenStyles.bridgelabz_text}>BridgeLabz</Text>
              <Text style = {HomeScreenStyles.hello_world_text}>Hello World</Text> */}
              <TextInput placeholder = 'Enter Name' onChangeText = {this.handleName}/>
              <TextInput placeholder = 'Is He Member?' onChangeText = {this.handleMember}/>
              <Button title = 'Submit' onPress = {this.press} />
              <View>
                {this.state.member.map((person,index) => (
                  <React.Fragment key = {index}>
                    <Text>{person}</Text>
                  </React.Fragment>
                ))}
              </View>
          </View>
      )
    }
}

