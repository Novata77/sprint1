FlowRouter.route("/", {
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{main:"forms"});
	}
});
FlowRouter.route("/aboutus", {
	name:"aboutus",
	action() {
		BlazeLayout.render("mainLayout",{ main:"about" });
	}
});
FlowRouter.route("/start", {
	name:"start",
	action() {
		BlazeLayout.render("start");
	}
});
FlowRouter.route("/profile", {
	name:"profile",
	action() {
		BlazeLayout.render("profile");
	}
});