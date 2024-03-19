import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

import { AuthProvider } from "./AuthContext";
import Dashboard from "./Pages/AdminDashboard";
// import HomePage from "./Pages/Home";
// import Home from "./Pages/Home";
// import NotFound from "./Pages/NotFound";

const Sidebar = React.lazy(() => import("../src/Componenets/Sidebar"));
const Cheelzs = React.lazy(() => import("./Pages/Cheelzs"));
const Gallery = React.lazy(() => import("./Pages/Gallery"));
const Home = React.lazy(() => import("./Pages/Home"));
const Header2 = React.lazy(() => import("././Componenets/Header2"));
const Welcome = React.lazy(() => import("./Pages/Welcome"));
const QrCode = React.lazy(() => import("./Pages/QrCode"));
const LinkingDevice = React.lazy(() => import("./Pages/LinkingDevice"));
const Verificationmain = React.lazy(() =>
  import("./Pages/Verification/Verificationmain")
);
const Verification1 = React.lazy(() =>
  import("./Pages/Verification/Verification1")
);
const Verificationsecond = React.lazy(() =>
  import("./Pages/Verification/Verificationsecond")
);
const Verificationthird = React.lazy(() =>
  import("./Pages/Verification/Verificationthird")
);
const Verificationfourth = React.lazy(() =>
  import("./Pages/Verification/Verificationfourth")
);
const Verificationfifth = React.lazy(() =>
  import("./Pages/Verification/Verificationfifth")
);
const Verificationbusiness = React.lazy(() =>
  import("./Pages/Verification/Verificationbusiness")
);
const Verificationsixth = React.lazy(() =>
  import("./Pages/Verification/Verificationsixth")
);
const Verificationid = React.lazy(() =>
  import("./Pages/Verification/Verificationid")
);
const Verificationconfirmation = React.lazy(() =>
  import("./Pages/Verification/Verificationconfirmation")
);
const Chattingpage1 = React.lazy(() =>
  import("./Pages/Chattingpages/Chattingpage1")
);
const Searchcontactpage = React.lazy(() =>
  import("./Pages/Chattingpages/Searchcontactpage")
);
const Chattingmessenger = React.lazy(() =>
  import("./Pages/Chattingpages/Chattingmessenger")
);
const Groupcall = React.lazy(() => import("./Pages/Chattingpages/Groupcall"));
const Groupcall2 = React.lazy(() => import("./Pages/Chattingpages/Groupcall2"));

const Callingpage = React.lazy(() =>
  import("./Pages/Chattingpages/Callingpage")
);
const Callingmarina = React.lazy(() =>
  import("./Pages/Chattingpages/Callingmarina")
);
const Callingvideo = React.lazy(() =>
  import("./Pages/Chattingpages/Callingvideo")
);
const Callingvideo2 = React.lazy(() =>
  import("./Pages/Chattingpages/Callingvideo2")
);

const Sharedscreen = React.lazy(() =>
  import("./Pages/Chattingpages/Sharedscreen")
);
const Groupchat = React.lazy(() => import("./Pages/Chattingpages/Groupchat"));
const Groupchatsecond = React.lazy(() =>
  import("./Pages/Chattingpages/Groupchatsecond")
);
const Groupvideosecond = React.lazy(() =>
  import("./Pages/Chattingpages/Groupvideosecond")
);
const Businesshelp = React.lazy(() =>
  import("./Pages/Businessmanager/Businesshelp")
);
const Supportchat = React.lazy(() =>
  import("./Pages/Businessmanager/Supportchat")
);
const Businesssupport = React.lazy(() =>
  import("./Pages/Businessmanager/Businesssupport")
);
const Businessleader = React.lazy(() =>
  import("./Pages/Businessmanager/Businessleader")
);
const Marketplace = React.lazy(() => import("./Pages/Marketplace/Marketplace"));
const Marketstore = React.lazy(() => import("./Pages/Marketplace/Marketstore"));
const Marketfood = React.lazy(() => import("./Pages/Marketplace/Marketfood"));
const Marketproperties = React.lazy(() =>
  import("./Pages/Marketplace/Marketproperties")
);
const Billingplan1 = React.lazy(() =>
  import("./Pages/Billingplans/Billingplan1")
);
const Billingplan2 = React.lazy(() =>
  import("./Pages/Billingplans/Billingplan2")
);
const Analyticsdashboard = React.lazy(() =>
  import("./Pages/Analyticsdashboard")
);
const Channel = React.lazy(() => import("./Pages/Channels/Channel"));
const Channelhome = React.lazy(() => import("./Pages/Channels/Channelhome"));
const Channelchattingpage = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage")
);
const Videocall = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Videocall")
);
const Cbroom = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Cbroom")
);
const Cbroomnext = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Cbroomnext")
);
const Chattingpage2 = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Chattingpage2")
);
const TooltipComponent = React.lazy(() =>
  import("./Componenets/TooltipComponent/TooltipComponent")
);

const Verificationprofileinformation = React.lazy(() =>
  import("./Pages/Verification/Verificationprofileinformation")
);
const ChannelMain = React.lazy(() => import("./Pages/ChannelMain"));
const VisitorProfile = React.lazy(() => import("./Pages/VisitorProfile"));
const FullVideo = React.lazy(() => import("./Pages/FullVideo"));
const Resturants = React.lazy(() => import("./Pages/Resturants"));
const Products = React.lazy(() => import("./Pages/Products"));
const Property = React.lazy(() => import("./Pages/Property"));
const Orderhandler = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Orderhandler")
);
const Cbroomcontinue = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Cbroomcontinue")
);
const Cbroomcontinuing = React.lazy(() =>
  import("./Pages/Channels/Channelchattingpage/Cbroomcontinuing")
);
const Channeladmin = React.lazy(() => import("./Pages/Channels/Channeladmin"));
const Merchandisercall = React.lazy(() =>
  import("./Pages/Channels/Merchandisercall")
);
const Merchandisercallnext = React.lazy(() =>
  import("./Pages/Channels/Merchandisercallnext")
);
const Merchandisercontinue = React.lazy(() =>
  import("./Pages/Channels/Merchandisercontinue")
);
const Merchandisercontinued = React.lazy(() =>
  import("./Pages/Channels/Merchandisercontinued")
);
const Group1 = React.lazy(() => import("./Pages/Groups/Group1"));
const Grouphome = React.lazy(() => import("./Pages/Groups/Grouphome"));
const Forvisitors = React.lazy(() => import("./Pages/Visitors/Forvisitors"));
const Visitorprofile1 = React.lazy(() =>
  import("./Pages/Visitors/Visitorprofile1")
);
const Cheelbasesingle = React.lazy(() =>
  import("./Pages/Visitors/Cheelbasesingle")
);
const Visitorvideo = React.lazy(() => import("./Pages/Visitors/Visitorvideo"));
const Videosearch = React.lazy(() => import("./Pages/Visitors/Videosearch"));
const Visitorchatting = React.lazy(() =>
  import("./Pages/Visitors/Visitorchatting")
);
const Gallerypage = React.lazy(() => import("./Pages/Visitors/Gallerypage"));
const Restaurantpage = React.lazy(() =>
  import("./Pages/Visitors/Restaurantpage")
);
const Productpage = React.lazy(() => import("./Pages/Visitors/Productpage"));
const Propertiees = React.lazy(() => import("./Pages/Visitors/Propertiees"));
const Cheelbasesingle2 = React.lazy(() =>
  import("./Pages/Visitors/Cheelbasesingle2")
);
const Gallerymultiple = React.lazy(() =>
  import("./Pages/Visitors/Gallerymultiple")
);
const Propertynext = React.lazy(() => import("./Pages/Propertynext"));
const Productpagefirst = React.lazy(() =>
  import("./Pages/Productpages/Productpagefirst")
);
const Productpagenext = React.lazy(() =>
  import("./Pages/Productpages/Productpagenext")
);
const Statusfirst = React.lazy(() => import("./Pages/Statuspages/Statusfirst"));
const Statusnext = React.lazy(() => import("./Pages/Statuspages/Statusnext"));
const Statussingle = React.lazy(() =>
  import("./Pages/Statuspages/Statussingle")
);

const Statuslast = React.lazy(() => import("./Pages/Statuspages/Statuslast"));
const Monetizeaccount = React.lazy(() =>
  import("./Pages/Monetize/Monetizeaccount")
);
const Monetizeaccountnext = React.lazy(() =>
  import("./Pages/Monetize/Monetizeaccountnext")
);
const Monetizechats = React.lazy(() =>
  import("./Pages/Monetize/Monetizechats")
);
const Monetizechannel = React.lazy(() =>
  import("./Pages/Monetize/Monetizechannel")
);
const Monetizegroup = React.lazy(() =>
  import("./Pages/Monetize/Monetizegroup")
);
const Monetizeaffiliate = React.lazy(() =>
  import("./Pages/Monetize/Monetizeaffiliate")
);
const Compaignmanager = React.lazy(() =>
  import("./Pages/Compaign/Compaignmanager")
);
const Compaignmanagernext = React.lazy(() =>
  import("./Pages/Compaign/Compaignmanagernext")
);
const Compaigncontinue = React.lazy(() =>
  import("./Pages/Compaign/Compaigncontinue")
);
const Compaignplacement = React.lazy(() =>
  import("./Pages/Compaign/Compaignplacement")
);
const Compaignlast = React.lazy(() => import("./Pages/Compaign/Compaignlast"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/Cheelzs" element={<Cheelzs />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="*" element={<Welcome />} />
            <Route path="/qrcode" element={<QrCode />} />

            <Route path="/Home" element={<Home />} />

            <Route path="/LinkingDevice" element={<LinkingDevice />} />
            <Route path="/Verificationmain" element={<Verificationmain />} />
            <Route path="/Verification1" element={<Verification1 />} />
            <Route
              path="/Verificationsecond"
              element={<Verificationsecond />}
            />
            <Route path="/Verificationthird" element={<Verificationthird />} />
            <Route
              path="/Verificationfourth"
              element={<Verificationfourth />}
            />
            <Route path="/Verificationfifth" element={<Verificationfifth />} />
            <Route
              path="/Verificationbusiness"
              element={<Verificationbusiness />}
            />
            <Route path="/Verificationsixth" element={<Verificationsixth />} />
            <Route path="/Verificationid" element={<Verificationid />} />
            <Route
              path="/Verificationconfirmation"
              element={<Verificationconfirmation />}
            />
            <Route path="/Chattingpage1" element={<Chattingpage1 />} />
            <Route path="/Searchcontactpage" element={<Searchcontactpage />} />
            <Route path="/Chattingmessenger" element={<Chattingmessenger />} />
            <Route path="/Groupcall" element={<Groupcall />} />
            <Route path="/Groupcall2" element={<Groupcall2 />} />
            <Route path="/Header2" element={<Header2 />} />

            <Route path="/Callingpage" element={<Callingpage />} />
            <Route path="/Callingmarina" element={<Callingmarina />} />
            <Route path="/Callingvideo" element={<Callingvideo />} />
            <Route path="/Callingvideo2" element={<Callingvideo2 />} />

            <Route path="/Sharedscreen" element={<Sharedscreen />} />
            <Route path="/Groupchat" element={<Groupchat />} />
            <Route path="/Groupchatsecond" element={<Groupchatsecond />} />
            <Route path="/Groupvideosecond" element={<Groupvideosecond />} />
            <Route path="/Businesshelp" element={<Businesshelp />} />
            <Route path="/Supportchat" element={<Supportchat />} />
            <Route path="/Businesssupport" element={<Businesssupport />} />
            <Route path="/Businessleader" element={<Businessleader />} />
            <Route path="/Marketplace" element={<Marketplace />} />
            <Route path="/Marketstore" element={<Marketstore />} />
            <Route path="/Marketfood" element={<Marketfood />} />
            <Route path="/Marketproperties" element={<Marketproperties />} />
            <Route path="/Billingplan1" element={<Billingplan1 />} />
            <Route path="/Billingplan2" element={<Billingplan2 />} />
            <Route
              path="/Analyticsdashboard"
              element={<Analyticsdashboard />}
            />
            <Route path="/Channel" element={<Channel />} />
            <Route path="/Channelhome" element={<Channelhome />} />
            <Route
              path="/Channelchattingpage"
              element={<Channelchattingpage />}
            />
            <Route path="/Videocall" element={<Videocall />} />
            <Route path="/Cbroom" element={<Cbroom />} />
            <Route path="/Cbroomnext" element={<Cbroomnext />} />
            <Route path="/Chattingpage2" element={<Chattingpage2 />} />
            <Route path="/TooltipComponent" element={<TooltipComponent />} />
            <Route path="/Merchandisercall" element={<Merchandisercall />} />
            <Route
              path="/Merchandisercallnext"
              element={<Merchandisercallnext />}
            />
            <Route
              path="/Merchandisercontinue"
              element={<Merchandisercontinue />}
            />
            <Route
              path="/Merchandisercontinued"
              element={<Merchandisercontinued />}
            />
            <Route path="/Sidebar" element={<Sidebar />} />

            <Route
              path="/Verificationprofileinformation "
              element={<Verificationprofileinformation />}
            />

            <Route path="/ChannelMain" element={<ChannelMain />} />
            <Route path="/VisitorProfile" element={<VisitorProfile />} />
            <Route path="/FullVideo" element={<FullVideo />} />
            <Route path="/Resturants" element={<Resturants />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Property" element={<Property />} />
            <Route path="/Orderhandler" element={<Orderhandler />} />
            <Route path="/Cbroomcontinue" element={<Cbroomcontinue />} />
            <Route path="/Cbroomcontinuing" element={<Cbroomcontinuing />} />
            <Route path="/Channeladmin" element={<Channeladmin />} />
            <Route path="/Group1" element={<Group1 />} />
            <Route path="/Grouphome" element={<Grouphome />} />
            <Route path="/Forvisitors" element={<Forvisitors />} />
            <Route path="/Visitorprofile1" element={<Visitorprofile1 />} />
            <Route path="/Cheelbasesingle" element={<Cheelbasesingle />} />
            <Route path="/Visitorvideo" element={<Visitorvideo />} />
            <Route path="/Videosearch" element={<Videosearch />} />
            <Route path="/Visitorchatting" element={<Visitorchatting />} />
            <Route path="/Gallerypage" element={<Gallerypage />} />
            <Route path="/Restaurantpage" element={<Restaurantpage />} />
            <Route path="/Productpage" element={<Productpage />} />
            <Route path="/Propertiees" element={<Propertiees />} />
            <Route path="/Cheelbasesingle2" element={<Cheelbasesingle2 />} />
            <Route path="/Gallerymultiple" element={<Gallerymultiple />} />
            <Route path="/Propertynext" element={<Propertynext />} />
            <Route path="/Productpagefirst" element={<Productpagefirst />} />
            <Route path="/Productpagenext" element={<Productpagenext />} />
            <Route path="/Statusfirst" element={<Statusfirst />} />
            <Route path="/Statusnext" element={<Statusnext />} />
            <Route path="/Statuslast" element={<Statuslast />} />
            <Route path="/Monetizeaccount" element={<Monetizeaccount />} />
            <Route
              path="/Monetizeaccountnext"
              element={<Monetizeaccountnext />}
            />
            <Route path="/Monetizechats" element={<Monetizechats />} />
            <Route path="/Monetizechannel" element={<Monetizechannel />} />
            <Route path="/Monetizegroup" element={<Monetizegroup />} />
            <Route path="/Monetizeaffiliate" element={<Monetizeaffiliate />} />
            <Route path="/Compaignmanager" element={<Compaignmanager />} />
            <Route
              path="/Compaignmanagernext"
              element={<Compaignmanagernext />}
            />
            <Route path="/Compaigncontinue" element={<Compaigncontinue />} />
            <Route path="/Compaignplacement" element={<Compaignplacement />} />
            <Route path="/Compaignlast" element={<Compaignlast />} />
            <Route path="/Statussingle" element={<Statussingle />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
