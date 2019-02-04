import * as React from "react";
import * as ReactDOM from "react-dom";
import './style.css'

class Site extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-default fixed-top">
                        <div className="container">
                            <li><a href="#About">About</a></li>
                            <li><a href="#Schedule">Schedule</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                            <li><a href="#Sponsors">Sponsors</a></li>
                        </div>
                    </nav>
                    {/*- Main Page Stuff  -*/}
                    <div className="container" id="mainpage">
                        <div className="jumbotron">
                            <h1> Cougar Hacks </h1>
                        </div>
                        <div id="About">
                            <h3>About</h3>
                            <p> Cougar hacks is a hackathon event in North County San Diego supported by the students of
                                Cal State San Marcos and MLH. In this 24-Hour event, participants will be competing in
                                several categories on the development of software/hardware hacks. We wish to extend an
                                invite to any and all college students around the San Diego area. We wish to see you there,
                                and happy hacking!
                            </p>
                        </div>
                        <div id="Schedule">
                            <h3>Schedule</h3>
                            <p> Lorem ipsum dolor sit amet, ad vel lobortis convenire, id ludus definitionem ius. Ea
                                fuisset accumsan moderatius duo, quot vituperatoribus ius et. Ad primis sensibus sit,
                                impedit invenire ocurreret has no. No ius volumus denique, eum viris
                                euripidis efficiendi te. Feugiat definitiones sed ne, ad veniam noster ancillae usu, usu
                                illum facete praesent ut.
                                Mea debet nostrud fierent te. At has adipisci mediocrem, sonet nonumy offendit cu sit,
                                sea ne audiam posidonium. In eum summo antiopam repudiare, ludus iisque vivendum cum id,
                                eam dictas alterum conceptam an. Duo legimus petentium
                                eloquentiam et, in eam iisque labitur dissentias. Cum ei sint vide consul, id nobis
                                numquam laboramus cum.
                                Ut habeo deterruisset qui, euismod salutatus mei in. No est ridens democritum. Et vidit
                                consul facilis nec, reque vivendum per te. Cu dolorem accumsan fabellas cum.
                                Est detracto omittantur ei, ne pri facilisi periculis. Per constituto vituperata in. Et
                                qui dicta propriae apeirian, vel eu populo audire. Has ex indoctum mediocrem patrioque,
                                tation lucilius eu eos. Odio invenire reprimique qui ad, est
                                vitae placerat partiendo ad.
                                Ex aperiri appetere pro, noster alterum euripidis ad vis, pri purto mollis no. Has fugit
                                mucius ea. Vis ea feugait interesset mediocritatem, qui meis detracto epicurei et, no
                                eam veritus deleniti. Iudico viderer eloquentiam ut sed, pro et
                                delectus convenire. Te has veri possim. Cu porro noster qui.
                                An tantas dictas timeam quo. In autem officiis cum. Corpora accusamus adolescens est ne,
                                his ne tacimates repudiare. Case commune nominati vim ei, primis facete accommodare qui
                                ei. Id unum mediocritatem pri.
                                Viderer eloquentiam ea pro, est eripuit maiestatis ad, corrumpit pertinacia vel ut. At
                                has purto tota accusam. Summo iriure eum ei, ad quo mundi albucius atomorum. Ridens
                                recusabo cum an. Vis periculis accusamus an. Tritani ocurreret eum cu,
                                porro tantas te est.
                                Id cetero singulis ius, an illum conceptam nec, ad mei eros iriure nominavi. Quo vocent
                                regione electram cu. Ullum errem constituto vix ut. Ad fugit convenire has, vix agam
                                vidisse sadipscing an. Graeci ponderum ea per, cu quo denique
                                imperdiet vituperata. Ei suas dicit tempor mei, bonorum ocurreret no eum.
                                Est elitr maiorum at, id mea quando melius, te pro malorum imperdiet consectetuer. Pri
                                dolorum lucilius in, te vero semper fabellas eum. Sit ad urbanitas sententiae. Augue
                                imperdiet nec ad, utamur saperet deseruisse cum at. Eos appetere
                                percipit appellantur at, quis quas praesent sea ei. No quo suavitate tincidunt, doctus
                                sententiae interpretaris ad est, commune disputando vix ut.
                                Vocibus corpora recusabo vim ei, has in altera lucilius mnesarchum. In mandamus
                                vituperatoribus usu, ut vel atqui qualisque rationibus, at pro augue epicuri lobortis.
                                Ei ponderum salutatus sed. Cum cu munere intellegebat, nam errem saepe te.
                            </p>
                            </div>
                            <div id="FAQ">
                            <h3>Frequently Asked Questions</h3>
                            <div className="btn-group btn-group-lg" role="group">
                                <button type="button" className="btn btn-primary" onClick="btnEvent()"> Event</button>
                                <button type="button" className="btn btn-primary" onClick="btnApps()"> Applications
                                </button>
                                <button type="button" className="btn btn-primary" onClick="btnVol()"> Volunteers and
                                    Mentors
                                </button>
                                <button type="button" className="btn btn-primary" onClick="btnOthers()"> Others</button>
                            </div>
                            <ul className="list-unstyled" id="inf-event">
                                <li>
                                    <h5>What is a hackathon?</h5>
                                    <p>A hackathon is an invention marathon. Students come together to build cool
                                        software & hardware hacks over 24-48 hours. It's very beginner friendly</p>
                                </li>
                                <li>
                                    <h5>Who can attend?</h5>
                                    <p>Only students who are currently enrolled at a college/university or
                                        have graduated within the past 12 months are eligible to attend.</p>
                                </li>
                                <li>
                                    <h5>When should I show up and when should I leave?</h5>
                                    <p>The hackathon starts on Saturday (April 27th) at 9:00 am to Sunday (April 28th) 12:00 pm.</p>
                                </li>
                                <li>
                                    <h5>What should I bring?</h5>
                                    <p>Expect to bring a computer, a sleeping bag, and some personal hygiene items!</p>
                                </li>
                                <li>
                                    <h5>Do I have to pay to get in?</h5>
                                    <p>Nothing. Attending a hackathon is free!</p>
                                </li>
                                <li>
                                    <h5>Do I have to pay for parking?</h5>
                                    <p>TBD</p>
                                </li>
                                <li>
                                    <h5>Will food be provided?</h5>
                                    <p>Food will be provided.</p>
                                </li>
                                <li>
                                    <h5>Are there any rules?</h5>
                                    <p>Yes there is. We enforce it very strongly. You can [find it here](https://static.mlh.io/docs/mlh-code-of-conduct.pdf)</p>
                                </li>
                            </ul>
                            <ul className="list-unstyled" id="inf-apps">
                                <li>
                                    <h5>Where do I apply?</h5>
                                    <p>TBD</p>
                                </li>
                                <li>
                                    <h5>When is the deadline to apply?</h5>
                                    <p>The deadline to apply for the hackathon is April 7th. </p>
                                </li>
                                <li>
                                    <h5>What if I don't have a team?</h5>
                                    <p>TBD</p>
                                </li>
                                <li>
                                    <h5>When will I be notified when I get accepted?</h5>
                                    <p>Expect to be notified a 1 - 2 weeks before the hackathon.</p>
                                </li>
                                <li>
                                    <h5>Help! One of my team members didn't get accepted! What should I do?</h5>
                                    <p>Email us!</p>
                                </li>
                            </ul>
                            <ul className="list-unstyled" id="inf-vol">
                                <li>
                                    <h5>Where do I apply to volunteer/mentor?</h5>
                                    <p>TBD</p>
                                </li>
                                <li>
                                    <h5>When is the deadline to apply for volunteering/mentoring?</h5>
                                    <p>The deadline for applying to be a volunteer/mentor is April 18th.</p>
                                </li>
                            </ul>
                            <ul className="list-unstyled" id="inf-others">
                                <li>
                                    <h5>What if my question isn't listed here?</h5>
                                    <p>You can contact us here!</p>
                                </li>
                            </ul>
                        </div>
                        <div id="Sponsors">
                            <h3>Sponsors</h3>
                            <p> Lorem ipsum dolor sit amet, ad vel lobortis convenire, id ludus definitionem ius. Ea
                                fuisset accumsan moderatius duo, quot vituperatoribus ius et. Ad primis sensibus sit,
                                impedit invenire ocurreret has no. No ius volumus denique, eum viris
                                euripidis efficiendi te. Feugiat definitiones sed ne, ad veniam noster ancillae usu, usu
                                illum facete praesent ut.
                                Mea debet nostrud fierent te. At has adipisci mediocrem, sonet nonumy offendit cu sit,
                                sea ne audiam posidonium. In eum summo antiopam repudiare, ludus iisque vivendum cum id,
                                eam dictas alterum conceptam an. Duo legimus petentium
                                eloquentiam et, in eam iisque labitur dissentias. Cum ei sint vide consul, id nobis
                                numquam laboramus cum.
                                Ut habeo deterruisset qui, euismod salutatus mei in. No est ridens democritum. Et vidit
                                consul facilis nec, reque vivendum per te. Cu dolorem accumsan fabellas cum.
                                Est detracto omittantur ei, ne pri facilisi periculis. Per constituto vituperata in. Et
                                qui dicta propriae apeirian, vel eu populo audire. Has ex indoctum mediocrem patrioque,
                                tation lucilius eu eos. Odio invenire reprimique qui ad, est
                                vitae placerat partiendo ad.
                                Ex aperiri appetere pro, noster alterum euripidis ad vis, pri purto mollis no. Has fugit
                                mucius ea. Vis ea feugait interesset mediocritatem, qui meis detracto epicurei et, no
                                eam veritus deleniti. Iudico viderer eloquentiam ut sed, pro et
                                delectus convenire. Te has veri possim. Cu porro noster qui.
                                An tantas dictas timeam quo. In autem officiis cum. Corpora accusamus adolescens est ne,
                                his ne tacimates repudiare. Case commune nominati vim ei, primis facete accommodare qui
                                ei. Id unum mediocritatem pri.
                                Viderer eloquentiam ea pro, est eripuit maiestatis ad, corrumpit pertinacia vel ut. At
                                has purto tota accusam. Summo iriure eum ei, ad quo mundi albucius atomorum. Ridens
                                recusabo cum an. Vis periculis accusamus an. Tritani ocurreret eum cu,
                                porro tantas te est.
                                Id cetero singulis ius, an illum conceptam nec, ad mei eros iriure nominavi. Quo vocent
                                regione electram cu. Ullum errem constituto vix ut. Ad fugit convenire has, vix agam
                                vidisse sadipscing an. Graeci ponderum ea per, cu quo denique
                                imperdiet vituperata. Ei suas dicit tempor mei, bonorum ocurreret no eum.
                                Est elitr maiorum at, id mea quando melius, te pro malorum imperdiet consectetuer. Pri
                                dolorum lucilius in, te vero semper fabellas eum. Sit ad urbanitas sententiae. Augue
                                imperdiet nec ad, utamur saperet deseruisse cum at. Eos appetere
                                percipit appellantur at, quis quas praesent sea ei. No quo suavitate tincidunt, doctus
                                sententiae interpretaris ad est, commune disputando vix ut.
                                Vocibus corpora recusabo vim ei, has in altera lucilius mnesarchum. In mandamus
                                vituperatoribus usu, ut vel atqui qualisque rationibus, at pro augue epicuri lobortis.
                                Ei ponderum salutatus sed. Cum cu munere intellegebat, nam errem saepe te.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Site />,
    document.getElementById("root")
);
