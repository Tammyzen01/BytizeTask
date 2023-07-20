import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Content, Container, Icon } from 'native-base';
import styles from './styles';
import { back } from '@utility/navigation'
import LottieView from 'lottie-react-native'
import { COLOR, FAMILY } from '@theme/typography'
import { navigate, openDrawer } from '@utility/navigation'
import data from './data/data';
import { ABOUT,LOGO,POINT_ICON } from '@constant'

const { width } = Dimensions.get('window')

export default class extends Component {

	constructor(props) {
		super(props)
		let route = props.route
		let params = route.params
		this.note = params.note
		this.state = {
			about: []
		}
	}

	async componentDidMount() {
		this.setData()
	}

	setData = () => {
		this.setState({
			about: data.about.points
		})
	}

	render() {
		const { about } = this.state
		return (
			<Container>
				<Content >
					<TouchableOpacity style={styles.IconView} onPress={() => navigate('Home')}>
						<Icon name='chevron-left' type='Entypo' style={styles.IconStyle} />
						<Text style={styles.backText}>About</Text>
					</TouchableOpacity>


					<View style={styles.firstBoxView}>
						<View style={styles.firstBoxInnerView}>
							<View style={styles.row}>
								<Image source={LOGO } style={styles.logoStyle} />
								<View style={{ width: '80%' }}>
									<Text style={[styles.HeadingText, { color: COLOR.default }]}>Kriti Labs</Text>
									<Text style={styles.contentText}>Value addition through digital transformation</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={{ margin: 10 }} />
					<View style={styles.lottieView}>
						<LottieView style={{ height: 230, width: width }} source={ABOUT} autoPlay loop />
					</View>

					<View style={{ margin: 10 }} />



					<View style={{ paddingHorizontal: 20 }}>
						<Text style={styles.HeadingText}>Add value in every human endeavour that is limited either by geography or process complexity.</Text>
						<View style={{ margin: 10 }} />

						<Text style={styles.description}>To provide solutions in areas of security, process enforcement and compliance management to different industries thereby helping them to improve the productivity of their assets</Text>
						<View />

						<View style={{ margin: 10 }} />

						{about.map((item, i) => {
							return (
								<View style={styles.rows}>
									<Image source={POINT_ICON} style={styles.pointImgStyle} />
									<Text style={styles.pointsText}>{item.point}</Text>
								</View>
							)
						})}

						<View style={{ margin: 10 }} />
						
					</View>
			

				</Content>

			</Container>
		);
	}
}

