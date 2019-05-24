module ViewHelper
  def preact_component(name, props = {}, options = {}, &block)
    html_options = options.reverse_merge(:data => {})
    html_options[:data].tap do |data|
      data[:preact_class] = name
      data[:preact_props] = (props.is_a?(String) ? props : props.to_json)
    end

    return content_tag(:div, '', html_options, &block)
  end
end
