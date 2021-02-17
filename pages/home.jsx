function HomePage() {
    return (<div className="page-home">
        <Navigation
            linkIndex={window.U_INDEX}
            logo={window.LOGO}
            logoAlt={window.L_INDEX}
            borderless={window.NAVBAR_BORDERLESS}>
            {window.GENERATED_NAV_BAR}
        </Navigation>
    </div>);
}