<Grid item sm={2}>

              			<Typography type="title" colorInherit >
              				{this.props.loginStatus===constants.SIGNED_IN?("Hello "+UserDetails.getName()):""}
              			</Typography>
        			</Grid>





        			<Script
            		url="https://apis.google.com/js/api.js"
            		onLoad={this.handleClientLoad}
            		onError={function(){}}
        		/>

      <div style={{backgroundImage: "url('http://localhost:3001/images/winter_mountain.jpg')",
                        backgroundSize:'contain',
                        backgroundColor: 'rgba(100,100,150,.5)', 
                        backgroundBlendMode: 'multiply'
                  }}  
      >
        <Provider store={trekStore}>
         <MainBarContainer/>
        </Provider>
        <Provider store={trekStore}>
         <MainPageContainer/>
        </Provider>







<li>
                            <a href="www.twitter.com"><img src="http://localhost:3001/icons/twitter_logo_white.svg"/></a>
                          </li>
                          <li>
                            <a href="www.facebook.com"><img src="http://localhost:3001/icons/facebook_logo_white.svg"/></a>
                          </li>
                          <li>
                            <a href="www.instagram.com"><img src="http://localhost:3001/icons/instagram_logo_white.svg"/></a>
                          </li>
                          <li>
                            <a href="www.youtube.com"><img src="http://localhost:3001/icons/youtube_logo_white.svg"/></a>
                          </li>          