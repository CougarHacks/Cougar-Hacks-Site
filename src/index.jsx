import * as React from "react";
import * as ReactDOM from "react-dom";

class Site extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
                <link rel="stylesheet" href="style.css" />
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <li> <a href="#About">About</a></li>
                        <li> <a href="#Schedule">Schedule</a></li>
                        <li> <a href="#FAQ">FAQ</a></li>
                        <li> <a href="#Sponsors">Sponsors</a></li>
                    </div>
                </nav>
                {/*--- Main Page Stuff  */}
                <div className="container">
                    <div className="jumbotron">
                        <h1> Cougar Hacks </h1>
                    </div>
                    <div id="About">
                        <h3>About</h3>
                        <p> Cougar Hacks is the premiere hackathon event in North County San Diego</p>
                    </div>
                    <div id="Schedule">
                        <h3>Schedule</h3>
                        <p> Lorem ipsum dolor sit amet, ad vel lobortis convenire, id ludus definitionem ius. Ea fuisset accumsan moderatius duo, quot vituperatoribus ius et. Ad primis sensibus sit, impedit invenire ocurreret has no. No ius volumus denique, eum viris
                            euripidis efficiendi te. Feugiat definitiones sed ne, ad veniam noster ancillae usu, usu illum facete praesent ut.
                            Mea debet nostrud fierent te. At has adipisci mediocrem, sonet nonumy offendit cu sit, sea ne audiam posidonium. In eum summo antiopam repudiare, ludus iisque vivendum cum id, eam dictas alterum conceptam an. Duo legimus petentium
                            eloquentiam et, in eam iisque labitur dissentias. Cum ei sint vide consul, id nobis numquam laboramus cum.
                            Ut habeo deterruisset qui, euismod salutatus mei in. No est ridens democritum. Et vidit consul facilis nec, reque vivendum per te. Cu dolorem accumsan fabellas cum.
                            Est detracto omittantur ei, ne pri facilisi periculis. Per constituto vituperata in. Et qui dicta propriae apeirian, vel eu populo audire. Has ex indoctum mediocrem patrioque, tation lucilius eu eos. Odio invenire reprimique qui ad, est
                            vitae placerat partiendo ad.
                            Ex aperiri appetere pro, noster alterum euripidis ad vis, pri purto mollis no. Has fugit mucius ea. Vis ea feugait interesset mediocritatem, qui meis detracto epicurei et, no eam veritus deleniti. Iudico viderer eloquentiam ut sed, pro et
                            delectus convenire. Te has veri possim. Cu porro noster qui.
                            An tantas dictas timeam quo. In autem officiis cum. Corpora accusamus adolescens est ne, his ne tacimates repudiare. Case commune nominati vim ei, primis facete accommodare qui ei. Id unum mediocritatem pri.
                            Viderer eloquentiam ea pro, est eripuit maiestatis ad, corrumpit pertinacia vel ut. At has purto tota accusam. Summo iriure eum ei, ad quo mundi albucius atomorum. Ridens recusabo cum an. Vis periculis accusamus an. Tritani ocurreret eum cu,
                            porro tantas te est.
                            Id cetero singulis ius, an illum conceptam nec, ad mei eros iriure nominavi. Quo vocent regione electram cu. Ullum errem constituto vix ut. Ad fugit convenire has, vix agam vidisse sadipscing an. Graeci ponderum ea per, cu quo denique
                            imperdiet vituperata. Ei suas dicit tempor mei, bonorum ocurreret no eum.
                            Est elitr maiorum at, id mea quando melius, te pro malorum imperdiet consectetuer. Pri dolorum lucilius in, te vero semper fabellas eum. Sit ad urbanitas sententiae. Augue imperdiet nec ad, utamur saperet deseruisse cum at. Eos appetere
                            percipit appellantur at, quis quas praesent sea ei. No quo suavitate tincidunt, doctus sententiae interpretaris ad est, commune disputando vix ut.
                            Vocibus corpora recusabo vim ei, has in altera lucilius mnesarchum. In mandamus vituperatoribus usu, ut vel atqui qualisque rationibus, at pro augue epicuri lobortis. Ei ponderum salutatus sed. Cum cu munere intellegebat, nam errem saepe te.
                        </p>
                    </div>
                    <div id="FAQ">
                        <h3>Frequently Asked Questions</h3>
                        <p> Lorem ipsum dolor sit amet, ad vel lobortis convenire, id ludus definitionem ius. Ea fuisset accumsan moderatius duo, quot vituperatoribus ius et. Ad primis sensibus sit, impedit invenire ocurreret has no. No ius volumus denique, eum viris
                            euripidis efficiendi te. Feugiat definitiones sed ne, ad veniam noster ancillae usu, usu illum facete praesent ut.
                            Mea debet nostrud fierent te. At has adipisci mediocrem, sonet nonumy offendit cu sit, sea ne audiam posidonium. In eum summo antiopam repudiare, ludus iisque vivendum cum id, eam dictas alterum conceptam an. Duo legimus petentium
                            eloquentiam et, in eam iisque labitur dissentias. Cum ei sint vide consul, id nobis numquam laboramus cum.
                            Ut habeo deterruisset qui, euismod salutatus mei in. No est ridens democritum. Et vidit consul facilis nec, reque vivendum per te. Cu dolorem accumsan fabellas cum.
                            Est detracto omittantur ei, ne pri facilisi periculis. Per constituto vituperata in. Et qui dicta propriae apeirian, vel eu populo audire. Has ex indoctum mediocrem patrioque, tation lucilius eu eos. Odio invenire reprimique qui ad, est
                            vitae placerat partiendo ad.
                            Ex aperiri appetere pro, noster alterum euripidis ad vis, pri purto mollis no. Has fugit mucius ea. Vis ea feugait interesset mediocritatem, qui meis detracto epicurei et, no eam veritus deleniti. Iudico viderer eloquentiam ut sed, pro et
                            delectus convenire. Te has veri possim. Cu porro noster qui.
                            An tantas dictas timeam quo. In autem officiis cum. Corpora accusamus adolescens est ne, his ne tacimates repudiare. Case commune nominati vim ei, primis facete accommodare qui ei. Id unum mediocritatem pri.
                            Viderer eloquentiam ea pro, est eripuit maiestatis ad, corrumpit pertinacia vel ut. At has purto tota accusam. Summo iriure eum ei, ad quo mundi albucius atomorum. Ridens recusabo cum an. Vis periculis accusamus an. Tritani ocurreret eum cu,
                            porro tantas te est.
                            Id cetero singulis ius, an illum conceptam nec, ad mei eros iriure nominavi. Quo vocent regione electram cu. Ullum errem constituto vix ut. Ad fugit convenire has, vix agam vidisse sadipscing an. Graeci ponderum ea per, cu quo denique
                            imperdiet vituperata. Ei suas dicit tempor mei, bonorum ocurreret no eum.
                            Est elitr maiorum at, id mea quando melius, te pro malorum imperdiet consectetuer. Pri dolorum lucilius in, te vero semper fabellas eum. Sit ad urbanitas sententiae. Augue imperdiet nec ad, utamur saperet deseruisse cum at. Eos appetere
                            percipit appellantur at, quis quas praesent sea ei. No quo suavitate tincidunt, doctus sententiae interpretaris ad est, commune disputando vix ut.
                            Vocibus corpora recusabo vim ei, has in altera lucilius mnesarchum. In mandamus vituperatoribus usu, ut vel atqui qualisque rationibus, at pro augue epicuri lobortis. Ei ponderum salutatus sed. Cum cu munere intellegebat, nam errem saepe te.
                        </p>
                    </div>
                    <div id="Sponsors">
                        <h3>Sponsors</h3>
                        <p> Lorem ipsum dolor sit amet, ad vel lobortis convenire, id ludus definitionem ius. Ea fuisset accumsan moderatius duo, quot vituperatoribus ius et. Ad primis sensibus sit, impedit invenire ocurreret has no. No ius volumus denique, eum viris
                            euripidis efficiendi te. Feugiat definitiones sed ne, ad veniam noster ancillae usu, usu illum facete praesent ut.
                            Mea debet nostrud fierent te. At has adipisci mediocrem, sonet nonumy offendit cu sit, sea ne audiam posidonium. In eum summo antiopam repudiare, ludus iisque vivendum cum id, eam dictas alterum conceptam an. Duo legimus petentium
                            eloquentiam et, in eam iisque labitur dissentias. Cum ei sint vide consul, id nobis numquam laboramus cum.
                            Ut habeo deterruisset qui, euismod salutatus mei in. No est ridens democritum. Et vidit consul facilis nec, reque vivendum per te. Cu dolorem accumsan fabellas cum.
                            Est detracto omittantur ei, ne pri facilisi periculis. Per constituto vituperata in. Et qui dicta propriae apeirian, vel eu populo audire. Has ex indoctum mediocrem patrioque, tation lucilius eu eos. Odio invenire reprimique qui ad, est
                            vitae placerat partiendo ad.
                            Ex aperiri appetere pro, noster alterum euripidis ad vis, pri purto mollis no. Has fugit mucius ea. Vis ea feugait interesset mediocritatem, qui meis detracto epicurei et, no eam veritus deleniti. Iudico viderer eloquentiam ut sed, pro et
                            delectus convenire. Te has veri possim. Cu porro noster qui.
                            An tantas dictas timeam quo. In autem officiis cum. Corpora accusamus adolescens est ne, his ne tacimates repudiare. Case commune nominati vim ei, primis facete accommodare qui ei. Id unum mediocritatem pri.
                            Viderer eloquentiam ea pro, est eripuit maiestatis ad, corrumpit pertinacia vel ut. At has purto tota accusam. Summo iriure eum ei, ad quo mundi albucius atomorum. Ridens recusabo cum an. Vis periculis accusamus an. Tritani ocurreret eum cu,
                            porro tantas te est.
                            Id cetero singulis ius, an illum conceptam nec, ad mei eros iriure nominavi. Quo vocent regione electram cu. Ullum errem constituto vix ut. Ad fugit convenire has, vix agam vidisse sadipscing an. Graeci ponderum ea per, cu quo denique
                            imperdiet vituperata. Ei suas dicit tempor mei, bonorum ocurreret no eum.
                            Est elitr maiorum at, id mea quando melius, te pro malorum imperdiet consectetuer. Pri dolorum lucilius in, te vero semper fabellas eum. Sit ad urbanitas sententiae. Augue imperdiet nec ad, utamur saperet deseruisse cum at. Eos appetere
                            percipit appellantur at, quis quas praesent sea ei. No quo suavitate tincidunt, doctus sententiae interpretaris ad est, commune disputando vix ut.
                            Vocibus corpora recusabo vim ei, has in altera lucilius mnesarchum. In mandamus vituperatoribus usu, ut vel atqui qualisque rationibus, at pro augue epicuri lobortis. Ei ponderum salutatus sed. Cum cu munere intellegebat, nam errem saepe te.
                        </p>
                    </div>
                </div>
                {/*--- Main Page Stuff  */}
            </div>
        );
    }
}

ReactDOM.render(
    <Site />,
    document.getElementById("root")
);
