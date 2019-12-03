import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Metrics, Fonts } from 'App/Themes'
import {
  Container,
  Separator,
  Card,
  Link,
  Footer,
  Links } from 'App/Components'

export default class ConnectRobotScreen extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })),
    onLinkPress: PropTypes.func.isRequired,
    onConnectPress: PropTypes.func.isRequired
  }

  render () {
    const {
      image,
      video,
      title,
      text,
      links,
      onLinkPress,
      onConnectPress
    } = this.props

    return (
      <Container>
        <ScrollView>
          <Card
            style={{
              view: {
                marginBottom: Metrics.unit * 2
              },
              textView: {
                marginBottom: 0
              }
            }}
            textAlign='left'
            image={image}
            video={video}
            title={title}
            text={text}
          />
          <Separator />
          {links &&
            <Links>
              {links.map((link, i) => {
                return (
                  <Link
                    key={i}
                    style={{
                      view: {
                        marginVertical: Metrics.unit / 2
                      },
                      text: {
                        fontSize: Fonts.size.regular
                      }
                    }}
                    text={link.title}
                    centered
                    uppercase={false}
                    onPress={() => { onLinkPress(link) }}
                  />
                )
              })}
            </Links>
          }
        </ScrollView>
        <Footer style={{ paddingTop: 34 }}>
          <Card
            button='Connect'
            onPress={onConnectPress}
          />
        </Footer>
      </Container>
    )
  }
}
