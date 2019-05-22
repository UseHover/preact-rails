module ViewHelper
  def preact_component(text, &block)
    puts "OUTPUT >>>>"
    return content_tag(:h1, text)
  end
end
