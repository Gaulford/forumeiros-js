function Navigation({
    linkIndex,
    logo,
    logoAlt,
    borderless,
    children
}) {
    return (
        <div id="page-header">
            <div className="headerbar">
                <div id="headerbar-top">
                    <div className="wrap">
                        <a href={linkIndex} id="logo"><img loading="lazy" src={logo} alt={logoAlt}/></a>

                        <ul className={`navbar navlinks${borderless}`}
                            dangerouslySetInnerHTML={{ __html: children }}>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}