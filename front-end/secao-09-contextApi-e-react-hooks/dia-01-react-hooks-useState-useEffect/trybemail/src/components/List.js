import PropTypes from 'prop-types';
import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function List({ messages, setMessageStatus }) {
    return (
      <ul className="messages-list">
				{messages.map((message) => {
					// faço algo aqui
					const messageClass = message.status === READ
          ? 'message-read'
          : 'message-unread';
					return (
					<li key={message.id}>
					<p className={ `message-title ${messageClass}` }>
						{message.title}
						</p>
					<button
					type="button"
					title="Marcar como lida"
					onClick={() => setMessageStatus(message.id, READ)}
					>
						<img src={ readIcon } alt="" />
					</button>
					<button
					type="button"
					title="Marcar como não lida"
					onClick={() => setMessageStatus(message.id, UNREAD)}
					>
						<img src={ unreadIcon } alt="" />
					</button>
					</li>
				)
				})}
			</ul>
    );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
};

export default List;
