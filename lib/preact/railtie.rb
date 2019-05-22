class Railtie < Rails::Railtie
  initializer 'preact_rails.setup_view_helpers', after: :load_config_initializers, group: :all do |app|
    ActiveSupport.on_load(:action_view) do
      include ViewHelper
    end
  end
end