import {AiFillHome} from 'react-icons/ai';
import {AiFillMessage} from 'react-icons/ai';
import {RiUserSearchLine} from 'react-icons/ri';
import {IoMdSettings} from 'react-icons/io';
import {RiMusicFill} from 'react-icons/ri';
import {BiNews} from 'react-icons/bi';


const navData = [
  {id: 1, icon: <AiFillHome/>, text: 'Домой', path: 'user/2'},
  {id: 2, icon: <AiFillMessage/>, text: 'Сообщения', path: 'dialogs'},
  {id: 3, icon: <RiUserSearchLine/>, text: 'Поиск', path: 'user-search'},
  {id: 4, icon: <RiMusicFill/>, text: 'Музыка', path: 'music'},
  {id: 5, icon: <BiNews/>, text: 'Новости', path: 'news'},
  {id: 6, icon: <IoMdSettings/>, text: 'Настройки', path: 'settings'},

];

export default navData;