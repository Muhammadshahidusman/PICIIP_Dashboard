# your_app/templatetags/form_tags.py
from django import template

register = template.Library()

@register.filter
def add_class(field, css_class):
    """Add a CSS class to a form field."""
    if hasattr(field, 'widget'):
        return field.as_widget(attrs={"class": css_class})
    return field  # Return the field as is if it doesn't have a widget