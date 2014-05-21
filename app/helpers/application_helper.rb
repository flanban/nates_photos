module ApplicationHelper
  def on_detail_page?
    (controller_name == "static_pages" and action_name == "set_page")
  end
end
