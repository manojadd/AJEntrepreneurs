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


        		