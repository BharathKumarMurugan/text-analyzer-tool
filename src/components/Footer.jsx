export default function Footer({avgReadTime}) {
    return (
        <div className="footer">
            <div className="footer-content">
                Average Reading Time:
            </div>
            <div className="footer-content-count">
                {avgReadTime == 0 ? '-' : avgReadTime > 1 ? `~${avgReadTime} minutes` : `~${avgReadTime} minute`}
            </div>
        </div>
    )
}
