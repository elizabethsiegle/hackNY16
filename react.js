var ListItem = React.createClass({
    render: function() { //author, text
        var user = this.props.tweet.user;
        if(!user) user = {screen_name:'anonymous'};
        var url = "https://twitter.com/"+user.screen_name+"/status/"+this.props.tweet.id_str;
        return <li
            className="infinite-list-item">
            <a href={url} target="_blank">{this.props.tweet.text}</a>
        </li>;
    }
   
});

var InfiniteList = React.createClass({
    getInitialState: function() {
        TweetStore.listen((msg) => {
            var userInfo = {};
            this.state.elements.push(msg.tweet);
            if(this.state.elements.length > 100) {
                this.state.elements.shift();
            }
            this.setState({
                elements:this.state.elements
            });
        });
        return {
            elements: []
        }
    },

    render: function() {
        var elements = this.state.elements.map((tweet,i)=>{
            return <ListItem key={i} tweet={tweet}/>
        });
        return <ul>{elements}</ul>;
    }

});



function makeReactList() {
    ReactDOM.render(<InfiniteList/>, document.getElementById('react-list'));
}