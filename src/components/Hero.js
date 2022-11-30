export default function Hero({ img, title, desc }) {
    return (
        <div className="hero">
            <img src={img} className="hero--image"/>
            <h1 className="hero--title">{title}</h1>
            <p className="hero--desc">{desc}</p>
        </div>
    )
}