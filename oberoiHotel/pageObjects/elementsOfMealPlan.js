/**
 * Created by swathi on 6/4/17.
 */
var mealplan = function(){
    //CreateMealPlan
    this.addButton = element(by.buttonText('ADD'));
    this.mealPlanOption = element(by.css('a[ui-sref="app.chains.properties.property.mealPlans"]'));
    this.addMealPlan = element(by.css('.btn.btn-primary.pull-right.m-b-10'));
    this.mealName = element(by.css('#mealPlanName'));
    this.mealDescription = element(by.css('textarea[ng-model="mealPlan.description"]'));
    this.mealValidity = element(by.css('input[ng-model="mealPlan.validity"]'));
    this.mealDependentPlan = element(by.css('#dependent_meal_plan_checkbox_id'));
    this.addMealExclusionsButton = element(by.css('button.btn.btn-primary'));
    this.MealExclusionsButton = element.all(by.css('input.relative')).get(2);
    this.submitButton = element(by.buttonText('Submit'));
    this.saveButton = element(by.buttonText('Save'));
}
module.exports = mealplan;