class Menu extends React.Component {
    render() {
        return (<div style={{marginLeft:'50px'}}>
            <div className="button"><Link to="/">История Одессы</Link></div>
            <div className="button"><Link to="/Opera">Главная достопримечательность</Link></div>
            <div className="button"><Link to="/others">Достопримечательности Одессы</Link></div>
            <div className="button"><Link to="/foto">Фотографии города</Link></div>
        </div>);
    }
}