var d = dendryUI.dendryEngine.state.qualities;
function bdeath () {
    d.bruning_plot = "successful";
 }

function bfail () {
   d.bruning_plot = "failed";
 }
function bfifty () {
   d.bruning_plot = 50;
 }
function bhundred () {
   d.bruning_plot = 100;
 }

 function hdeath () {
   d.hjalmar_plot = "successful";
 }

function hfail () {
   d.hjalmar_plot = "failed";
 }
function hfifty () {
   d.hjalmar_plot = 50;
 }
function hhundred () {
   d.hjalmar_plot = 100;
 }
 function new_hire () {
   d.director_pointer = Math.floor( Math.random() * d.director_a.length);
   d.director_type = 1;
   d.director_s = d.director_a[d.director_pointer];
   d.resources -= 1;
   window.changeTab('status.Targets', 'Targets')
}
function targetH () {
   d.plot_target = "hjalmar";
   window.changeTab('status.Targets', 'Targets');
}
function targetB () {
   d.plot_target = "bruning";
   window.changeTab('status.Targets', 'Targets');
}
function director_actions () {
   d.director_actions = 1;
   window.changeTab('status.Actions', 'Actions')
}
function purge () {

   if (d.loyalty_decay > 0) {
      d.loyalty_decay -= 0.01;
      d.interior_police_loyalty += 0.1;
      d.prussian_police_loyalty += 0.1;
      if (d.plot_target == "hjalmar") {
         d.hjalmar_plot -= (d.plot_strength * 3);
      }
      if (d.plot_target == "bruning") {
         d.bruning_plot -= (d.plot_strength * 3);
      }
   }
   d.director_actions_timer = 3;
   d.month_actions += 1;
   window.changeTab('status.Actions', 'Actions')

}
function rush () {
   
   if (d.loyalty_decay < 0.04) {
      d.loyalty_decay += 0.01;
      d.interior_police_loyalty -= 0.1;
      d.prussian_police_loyalty -= 0.1;
      if (d.plot_target == "hjalmar") {
         d.hjalmar_plot += (d.plot_strength * 3);
      }
      if (d.plot_target == "bruning") {
         d.bruning_plot += (d.plot_strength * 3);
      }
   }
   d.director_actions_timer = 3;
   d.month_actions += 1;
   window.changeTab('status.Actions', 'Actions')

}