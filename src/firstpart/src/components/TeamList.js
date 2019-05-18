import React from 'react';
import { connect } from 'react-redux';
import AddPlayer from "./AddPlayer";
import {removePlayer} from "../actions";

class TeamList extends React.Component {

    renderList() {
        let characterList = this.props[this.props.stateList];

        return characterList.map(char => {
            return (
                <li className="list-group-item" key={char.id}>
                    { char.name } - { char.initiative }
                    <button type='button'
                            onClick={() => { this.props.removePlayer(char.id) }}
                            className='btn btn-danger'
                            style={{ float: 'right' }}>
                        Delete
                    </button>
                </li>
            );
        })
    }

    render() {
        let characterList = this.renderList();

        return (
            <div className="card" style={{ padding: '10px' }}>
                <h3>{ this.props.title }</h3>
                <AddPlayer title={this.props.title} characterType={this.props.stateList} />
                <ul className="list-group" style={{ marginTop: '15px' }}>
                    { characterList }
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        players: state.characters.players,
        enemies: state.characters.enemies
    };
};

export default connect(mapStateToProps, { removePlayer })(TeamList);