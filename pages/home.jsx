function HomePage() {
    return (<div className="page-home">
        <Navigation
            linkIndex={window.header.U_INDEX}
            logo={window.header.LOGO}
            logoAlt={window.header.L_INDEX}
            borderless={window.header.NAVBAR_BORDERLESS}>
            {window.header.GENERATED_NAV_BAR}
        </Navigation>
    </div>);
}