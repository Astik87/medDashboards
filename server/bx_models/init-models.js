var DataTypes = require("sequelize").DataTypes;
var _answer_active = require("./answer_active");
var _b_admin_notify = require("./b_admin_notify");
var _b_admin_notify_lang = require("./b_admin_notify_lang");
var _b_agent = require("./b_agent");
var _b_app_password = require("./b_app_password");
var _b_b24connector_button_site = require("./b_b24connector_button_site");
var _b_b24connector_buttons = require("./b_b24connector_buttons");
var _b_bitrixcloud_option = require("./b_bitrixcloud_option");
var _b_cache_tag = require("./b_cache_tag");
var _b_captcha = require("./b_captcha");
var _b_catalog_rounding = require("./b_catalog_rounding");
var _b_checklist = require("./b_checklist");
var _b_clouds_copy_queue = require("./b_clouds_copy_queue");
var _b_clouds_delete_queue = require("./b_clouds_delete_queue");
var _b_clouds_file_bucket = require("./b_clouds_file_bucket");
var _b_clouds_file_hash = require("./b_clouds_file_hash");
var _b_clouds_file_resize = require("./b_clouds_file_resize");
var _b_clouds_file_save = require("./b_clouds_file_save");
var _b_clouds_file_upload = require("./b_clouds_file_upload");
var _b_component_params = require("./b_component_params");
var _b_composite_log = require("./b_composite_log");
var _b_composite_page = require("./b_composite_page");
var _b_consent_agreement = require("./b_consent_agreement");
var _b_consent_field = require("./b_consent_field");
var _b_consent_user_consent = require("./b_consent_user_consent");
var _b_consent_user_consent_item = require("./b_consent_user_consent_item");
var _b_counter_data = require("./b_counter_data");
var _b_culture = require("./b_culture");
var _b_entity_usage = require("./b_entity_usage");
var _b_event = require("./b_event");
var _b_event_attachment = require("./b_event_attachment");
var _b_event_log = require("./b_event_log");
var _b_event_message = require("./b_event_message");
var _b_event_message_attachment = require("./b_event_message_attachment");
var _b_event_message_site = require("./b_event_message_site");
var _b_event_type = require("./b_event_type");
var _b_favorite = require("./b_favorite");
var _b_file = require("./b_file");
var _b_file_duplicate = require("./b_file_duplicate");
var _b_file_hash = require("./b_file_hash");
var _b_file_preview = require("./b_file_preview");
var _b_file_search = require("./b_file_search");
var _b_filters = require("./b_filters");
var _b_finder_dest = require("./b_finder_dest");
var _b_geoip_handlers = require("./b_geoip_handlers");
var _b_group = require("./b_group");
var _b_group_collection_task = require("./b_group_collection_task");
var _b_group_subordinate = require("./b_group_subordinate");
var _b_group_task = require("./b_group_task");
var _b_hlblock_entity = require("./b_hlblock_entity");
var _b_hlblock_entity_lang = require("./b_hlblock_entity_lang");
var _b_hlblock_entity_rights = require("./b_hlblock_entity_rights");
var _b_hot_keys = require("./b_hot_keys");
var _b_hot_keys_code = require("./b_hot_keys_code");
var _b_iblock = require("./b_iblock");
var _b_iblock_cache = require("./b_iblock_cache");
var _b_iblock_element = require("./b_iblock_element");
var _b_iblock_element_iprop = require("./b_iblock_element_iprop");
var _b_iblock_element_lock = require("./b_iblock_element_lock");
var _b_iblock_element_prop_m11 = require("./b_iblock_element_prop_m11");
var _b_iblock_element_prop_m12 = require("./b_iblock_element_prop_m12");
var _b_iblock_element_prop_m13 = require("./b_iblock_element_prop_m13");
var _b_iblock_element_prop_m14 = require("./b_iblock_element_prop_m14");
var _b_iblock_element_prop_m15 = require("./b_iblock_element_prop_m15");
var _b_iblock_element_prop_m22 = require("./b_iblock_element_prop_m22");
var _b_iblock_element_prop_m3 = require("./b_iblock_element_prop_m3");
var _b_iblock_element_prop_m38 = require("./b_iblock_element_prop_m38");
var _b_iblock_element_prop_m9 = require("./b_iblock_element_prop_m9");
var _b_iblock_element_prop_s11 = require("./b_iblock_element_prop_s11");
var _b_iblock_element_prop_s12 = require("./b_iblock_element_prop_s12");
var _b_iblock_element_prop_s13 = require("./b_iblock_element_prop_s13");
var _b_iblock_element_prop_s14 = require("./b_iblock_element_prop_s14");
var _b_iblock_element_prop_s15 = require("./b_iblock_element_prop_s15");
var _b_iblock_element_prop_s22 = require("./b_iblock_element_prop_s22");
var _b_iblock_element_prop_s3 = require("./b_iblock_element_prop_s3");
var _b_iblock_element_prop_s38 = require("./b_iblock_element_prop_s38");
var _b_iblock_element_prop_s9 = require("./b_iblock_element_prop_s9");
var _b_iblock_element_property = require("./b_iblock_element_property");
var _b_iblock_element_right = require("./b_iblock_element_right");
var _b_iblock_fields = require("./b_iblock_fields");
var _b_iblock_group = require("./b_iblock_group");
var _b_iblock_iblock_iprop = require("./b_iblock_iblock_iprop");
var _b_iblock_iproperty = require("./b_iblock_iproperty");
var _b_iblock_messages = require("./b_iblock_messages");
var _b_iblock_offers_tmp = require("./b_iblock_offers_tmp");
var _b_iblock_property = require("./b_iblock_property");
var _b_iblock_property_enum = require("./b_iblock_property_enum");
var _b_iblock_property_feature = require("./b_iblock_property_feature");
var _b_iblock_right = require("./b_iblock_right");
var _b_iblock_rss = require("./b_iblock_rss");
var _b_iblock_section = require("./b_iblock_section");
var _b_iblock_section_element = require("./b_iblock_section_element");
var _b_iblock_section_iprop = require("./b_iblock_section_iprop");
var _b_iblock_section_property = require("./b_iblock_section_property");
var _b_iblock_section_right = require("./b_iblock_section_right");
var _b_iblock_sequence = require("./b_iblock_sequence");
var _b_iblock_site = require("./b_iblock_site");
var _b_iblock_type = require("./b_iblock_type");
var _b_iblock_type_lang = require("./b_iblock_type_lang");
var _b_landing = require("./b_landing");
var _b_landing_binding = require("./b_landing_binding");
var _b_landing_block = require("./b_landing_block");
var _b_landing_chat = require("./b_landing_chat");
var _b_landing_chat_binding = require("./b_landing_chat_binding");
var _b_landing_cookies_agreement = require("./b_landing_cookies_agreement");
var _b_landing_demo = require("./b_landing_demo");
var _b_landing_designer_repo = require("./b_landing_designer_repo");
var _b_landing_domain = require("./b_landing_domain");
var _b_landing_entity_lock = require("./b_landing_entity_lock");
var _b_landing_entity_rights = require("./b_landing_entity_rights");
var _b_landing_file = require("./b_landing_file");
var _b_landing_filter_block = require("./b_landing_filter_block");
var _b_landing_filter_entity = require("./b_landing_filter_entity");
var _b_landing_hook_data = require("./b_landing_hook_data");
var _b_landing_placement = require("./b_landing_placement");
var _b_landing_repo = require("./b_landing_repo");
var _b_landing_role = require("./b_landing_role");
var _b_landing_site = require("./b_landing_site");
var _b_landing_syspage = require("./b_landing_syspage");
var _b_landing_template = require("./b_landing_template");
var _b_landing_template_ref = require("./b_landing_template_ref");
var _b_landing_update_block = require("./b_landing_update_block");
var _b_landing_urlchecker_host = require("./b_landing_urlchecker_host");
var _b_landing_urlchecker_status = require("./b_landing_urlchecker_status");
var _b_landing_urlchecker_whitelist = require("./b_landing_urlchecker_whitelist");
var _b_landing_urlrewrite = require("./b_landing_urlrewrite");
var _b_landing_view = require("./b_landing_view");
var _b_lang = require("./b_lang");
var _b_lang_domain = require("./b_lang_domain");
var _b_language = require("./b_language");
var _b_log_notification = require("./b_log_notification");
var _b_log_notification_action = require("./b_log_notification_action");
var _b_main_mail_blacklist = require("./b_main_mail_blacklist");
var _b_main_mail_sender = require("./b_main_mail_sender");
var _b_medialib_collection = require("./b_medialib_collection");
var _b_medialib_collection_item = require("./b_medialib_collection_item");
var _b_medialib_item = require("./b_medialib_item");
var _b_medialib_type = require("./b_medialib_type");
var _b_messageservice_message = require("./b_messageservice_message");
var _b_messageservice_rest_app = require("./b_messageservice_rest_app");
var _b_messageservice_rest_app_lang = require("./b_messageservice_rest_app_lang");
var _b_module = require("./b_module");
var _b_module_group = require("./b_module_group");
var _b_module_to_module = require("./b_module_to_module");
var _b_numerator = require("./b_numerator");
var _b_numerator_sequence = require("./b_numerator_sequence");
var _b_operation = require("./b_operation");
var _b_option = require("./b_option");
var _b_option_site = require("./b_option_site");
var _b_perf_cache = require("./b_perf_cache");
var _b_perf_cluster = require("./b_perf_cluster");
var _b_perf_component = require("./b_perf_component");
var _b_perf_error = require("./b_perf_error");
var _b_perf_history = require("./b_perf_history");
var _b_perf_hit = require("./b_perf_hit");
var _b_perf_index_ban = require("./b_perf_index_ban");
var _b_perf_index_complete = require("./b_perf_index_complete");
var _b_perf_index_suggest = require("./b_perf_index_suggest");
var _b_perf_index_suggest_sql = require("./b_perf_index_suggest_sql");
var _b_perf_sql = require("./b_perf_sql");
var _b_perf_sql_backtrace = require("./b_perf_sql_backtrace");
var _b_perf_tab_column_stat = require("./b_perf_tab_column_stat");
var _b_perf_tab_stat = require("./b_perf_tab_stat");
var _b_perf_test = require("./b_perf_test");
var _b_rating = require("./b_rating");
var _b_rating_component = require("./b_rating_component");
var _b_rating_component_results = require("./b_rating_component_results");
var _b_rating_prepare = require("./b_rating_prepare");
var _b_rating_results = require("./b_rating_results");
var _b_rating_rule = require("./b_rating_rule");
var _b_rating_rule_vetting = require("./b_rating_rule_vetting");
var _b_rating_user = require("./b_rating_user");
var _b_rating_vote = require("./b_rating_vote");
var _b_rating_vote_group = require("./b_rating_vote_group");
var _b_rating_voting = require("./b_rating_voting");
var _b_rating_voting_prepare = require("./b_rating_voting_prepare");
var _b_rating_voting_reaction = require("./b_rating_voting_reaction");
var _b_rating_weight = require("./b_rating_weight");
var _b_report_visual_report_configuration = require("./b_report_visual_report_configuration");
var _b_report_visual_report_dashboard = require("./b_report_visual_report_dashboard");
var _b_report_visual_report_dashboard_row = require("./b_report_visual_report_dashboard_row");
var _b_report_visual_report_entity = require("./b_report_visual_report_entity");
var _b_report_visual_report_entity_config = require("./b_report_visual_report_entity_config");
var _b_report_visual_report_widget = require("./b_report_visual_report_widget");
var _b_report_visual_report_widget_config = require("./b_report_visual_report_widget_config");
var _b_rest_ap = require("./b_rest_ap");
var _b_rest_ap_permission = require("./b_rest_ap_permission");
var _b_rest_app = require("./b_rest_app");
var _b_rest_app_lang = require("./b_rest_app_lang");
var _b_rest_app_log = require("./b_rest_app_log");
var _b_rest_configuration_storage = require("./b_rest_configuration_storage");
var _b_rest_event = require("./b_rest_event");
var _b_rest_event_offline = require("./b_rest_event_offline");
var _b_rest_integration = require("./b_rest_integration");
var _b_rest_log = require("./b_rest_log");
var _b_rest_owner_entity = require("./b_rest_owner_entity");
var _b_rest_placement = require("./b_rest_placement");
var _b_rest_placement_lang = require("./b_rest_placement_lang");
var _b_rest_stat = require("./b_rest_stat");
var _b_rest_stat_app = require("./b_rest_stat_app");
var _b_rest_stat_method = require("./b_rest_stat_method");
var _b_rest_usage_entity = require("./b_rest_usage_entity");
var _b_rest_usage_stat = require("./b_rest_usage_stat");
var _b_sale_exchange_log = require("./b_sale_exchange_log");
var _b_sale_order_payment_item = require("./b_sale_order_payment_item");
var _b_sale_order_round = require("./b_sale_order_round");
var _b_sale_ruspost_reliability = require("./b_sale_ruspost_reliability");
var _b_search_content = require("./b_search_content");
var _b_search_content_freq = require("./b_search_content_freq");
var _b_search_content_param = require("./b_search_content_param");
var _b_search_content_right = require("./b_search_content_right");
var _b_search_content_site = require("./b_search_content_site");
var _b_search_content_stem = require("./b_search_content_stem");
var _b_search_content_text = require("./b_search_content_text");
var _b_search_content_title = require("./b_search_content_title");
var _b_search_custom_rank = require("./b_search_custom_rank");
var _b_search_phrase = require("./b_search_phrase");
var _b_search_stem = require("./b_search_stem");
var _b_search_suggest = require("./b_search_suggest");
var _b_search_tags = require("./b_search_tags");
var _b_search_user_right = require("./b_search_user_right");
var _b_sec_filter_mask = require("./b_sec_filter_mask");
var _b_sec_frame_mask = require("./b_sec_frame_mask");
var _b_sec_iprule = require("./b_sec_iprule");
var _b_sec_iprule_excl_ip = require("./b_sec_iprule_excl_ip");
var _b_sec_iprule_excl_mask = require("./b_sec_iprule_excl_mask");
var _b_sec_iprule_incl_ip = require("./b_sec_iprule_incl_ip");
var _b_sec_iprule_incl_mask = require("./b_sec_iprule_incl_mask");
var _b_sec_recovery_codes = require("./b_sec_recovery_codes");
var _b_sec_redirect_url = require("./b_sec_redirect_url");
var _b_sec_session = require("./b_sec_session");
var _b_sec_user = require("./b_sec_user");
var _b_sec_virus = require("./b_sec_virus");
var _b_sec_white_list = require("./b_sec_white_list");
var _b_security_sitecheck = require("./b_security_sitecheck");
var _b_seo_adv_autolog = require("./b_seo_adv_autolog");
var _b_seo_adv_banner = require("./b_seo_adv_banner");
var _b_seo_adv_campaign = require("./b_seo_adv_campaign");
var _b_seo_adv_group = require("./b_seo_adv_group");
var _b_seo_adv_link = require("./b_seo_adv_link");
var _b_seo_adv_log = require("./b_seo_adv_log");
var _b_seo_adv_order = require("./b_seo_adv_order");
var _b_seo_adv_region = require("./b_seo_adv_region");
var _b_seo_keywords = require("./b_seo_keywords");
var _b_seo_search_engine = require("./b_seo_search_engine");
var _b_seo_service_log = require("./b_seo_service_log");
var _b_seo_service_queue = require("./b_seo_service_queue");
var _b_seo_service_rtg_queue = require("./b_seo_service_rtg_queue");
var _b_seo_service_subscription = require("./b_seo_service_subscription");
var _b_seo_service_webhook = require("./b_seo_service_webhook");
var _b_seo_sitemap = require("./b_seo_sitemap");
var _b_seo_sitemap_entity = require("./b_seo_sitemap_entity");
var _b_seo_sitemap_iblock = require("./b_seo_sitemap_iblock");
var _b_seo_sitemap_runtime = require("./b_seo_sitemap_runtime");
var _b_seo_yandex_direct_stat = require("./b_seo_yandex_direct_stat");
var _b_short_uri = require("./b_short_uri");
var _b_site_template = require("./b_site_template");
var _b_sm_version_history = require("./b_sm_version_history");
var _b_smile = require("./b_smile");
var _b_smile_lang = require("./b_smile_lang");
var _b_smile_set = require("./b_smile_set");
var _b_sms_template = require("./b_sms_template");
var _b_sms_template_site = require("./b_sms_template_site");
var _b_socialservices_ap = require("./b_socialservices_ap");
var _b_socialservices_contact = require("./b_socialservices_contact");
var _b_socialservices_contact_connect = require("./b_socialservices_contact_connect");
var _b_socialservices_message = require("./b_socialservices_message");
var _b_socialservices_user = require("./b_socialservices_user");
var _b_socialservices_user_link = require("./b_socialservices_user_link");
var _b_socialservices_zoom_meeting = require("./b_socialservices_zoom_meeting");
var _b_socialservices_zoom_meeting_recording = require("./b_socialservices_zoom_meeting_recording");
var _b_sticker = require("./b_sticker");
var _b_sticker_group_task = require("./b_sticker_group_task");
var _b_task = require("./b_task");
var _b_task_operation = require("./b_task_operation");
var _b_translate_diff = require("./b_translate_diff");
var _b_translate_file = require("./b_translate_file");
var _b_translate_path = require("./b_translate_path");
var _b_translate_path_lang = require("./b_translate_path_lang");
var _b_translate_path_tree = require("./b_translate_path_tree");
var _b_translate_phrase = require("./b_translate_phrase");
var _b_ui_entity_editor_config = require("./b_ui_entity_editor_config");
var _b_ui_entity_editor_config_ac = require("./b_ui_entity_editor_config_ac");
var _b_undo = require("./b_undo");
var _b_urlpreview_metadata = require("./b_urlpreview_metadata");
var _b_urlpreview_route = require("./b_urlpreview_route");
var _b_user = require("./b_user");
var _b_user_access = require("./b_user_access");
var _b_user_access_check = require("./b_user_access_check");
var _b_user_auth_action = require("./b_user_auth_action");
var _b_user_auth_code = require("./b_user_auth_code");
var _b_user_counter = require("./b_user_counter");
var _b_user_digest = require("./b_user_digest");
var _b_user_field = require("./b_user_field");
var _b_user_field_confirm = require("./b_user_field_confirm");
var _b_user_field_enum = require("./b_user_field_enum");
var _b_user_field_lang = require("./b_user_field_lang");
var _b_user_field_permission = require("./b_user_field_permission");
var _b_user_group = require("./b_user_group");
var _b_user_hit_auth = require("./b_user_hit_auth");
var _b_user_index = require("./b_user_index");
var _b_user_index_selector = require("./b_user_index_selector");
var _b_user_option = require("./b_user_option");
var _b_user_password = require("./b_user_password");
var _b_user_phone_auth = require("./b_user_phone_auth");
var _b_user_profile_history = require("./b_user_profile_history");
var _b_user_profile_record = require("./b_user_profile_record");
var _b_user_session = require("./b_user_session");
var _b_user_stored_auth = require("./b_user_stored_auth");
var _b_utm_iblock_22_section = require("./b_utm_iblock_22_section");
var _b_utm_iblock_9_section = require("./b_utm_iblock_9_section");
var _b_utm_user = require("./b_utm_user");
var _b_uts_iblock_22_section = require("./b_uts_iblock_22_section");
var _b_uts_iblock_9_section = require("./b_uts_iblock_9_section");
var _b_uts_user = require("./b_uts_user");
var _b_xml_tree = require("./b_xml_tree");
var _bx_db_migrations = require("./bx_db_migrations");
var _course_registry = require("./course_registry");
var _course_registry_stat = require("./course_registry_stat");
var _event_program = require("./event_program");
var _event_registry = require("./event_registry");
var _event_registry_stat = require("./event_registry_stat");
var _event_tags = require("./event_tags");
var _iqsms_sender_list = require("./iqsms_sender_list");
var _iqsms_sender_template = require("./iqsms_sender_template");
var _iqsms_sender_template_site = require("./iqsms_sender_template_site");
var _long_read = require("./long_read");
var _long_read_uf_estimation = require("./long_read_uf_estimation");
var _med_directions = require("./med_directions");
var _module_options = require("./module_options");
var _nmo_entity = require("./nmo_entity");
var _oauth_access_tokens = require("./oauth_access_tokens");
var _oauth_access_tokens_uf_scopes = require("./oauth_access_tokens_uf_scopes");
var _oauth_auth_codes = require("./oauth_auth_codes");
var _oauth_auth_codes_uf_scopes = require("./oauth_auth_codes_uf_scopes");
var _oauth_clients = require("./oauth_clients");
var _oauth_refresh_tokens = require("./oauth_refresh_tokens");
var _oauth_scopes = require("./oauth_scopes");
var _parce_prodoctorov = require("./parce_prodoctorov");
var _parcedocdoc = require("./parcedocdoc");
var _reg_region = require("./reg_region");
var _streamopros = require("./streamopros");
var _streamopros_uf_answer = require("./streamopros_uf_answer");
var _test_answer_variants = require("./test_answer_variants");
var _test_questions = require("./test_questions");
var _test_results = require("./test_results");
var _test_results_uf_answer = require("./test_results_uf_answer");
var _test_tests = require("./test_tests");
var _user_group_settings = require("./user_group_settings");
var _user_log = require("./user_log");
var _vslider = require("./vslider");

function initModels(sequelize) {
  var answer_active = _answer_active(sequelize, DataTypes);
  var b_admin_notify = _b_admin_notify(sequelize, DataTypes);
  var b_admin_notify_lang = _b_admin_notify_lang(sequelize, DataTypes);
  var b_agent = _b_agent(sequelize, DataTypes);
  var b_app_password = _b_app_password(sequelize, DataTypes);
  var b_b24connector_button_site = _b_b24connector_button_site(sequelize, DataTypes);
  var b_b24connector_buttons = _b_b24connector_buttons(sequelize, DataTypes);
  var b_bitrixcloud_option = _b_bitrixcloud_option(sequelize, DataTypes);
  var b_cache_tag = _b_cache_tag(sequelize, DataTypes);
  var b_captcha = _b_captcha(sequelize, DataTypes);
  var b_catalog_rounding = _b_catalog_rounding(sequelize, DataTypes);
  var b_checklist = _b_checklist(sequelize, DataTypes);
  var b_clouds_copy_queue = _b_clouds_copy_queue(sequelize, DataTypes);
  var b_clouds_delete_queue = _b_clouds_delete_queue(sequelize, DataTypes);
  var b_clouds_file_bucket = _b_clouds_file_bucket(sequelize, DataTypes);
  var b_clouds_file_hash = _b_clouds_file_hash(sequelize, DataTypes);
  var b_clouds_file_resize = _b_clouds_file_resize(sequelize, DataTypes);
  var b_clouds_file_save = _b_clouds_file_save(sequelize, DataTypes);
  var b_clouds_file_upload = _b_clouds_file_upload(sequelize, DataTypes);
  var b_component_params = _b_component_params(sequelize, DataTypes);
  var b_composite_log = _b_composite_log(sequelize, DataTypes);
  var b_composite_page = _b_composite_page(sequelize, DataTypes);
  var b_consent_agreement = _b_consent_agreement(sequelize, DataTypes);
  var b_consent_field = _b_consent_field(sequelize, DataTypes);
  var b_consent_user_consent = _b_consent_user_consent(sequelize, DataTypes);
  var b_consent_user_consent_item = _b_consent_user_consent_item(sequelize, DataTypes);
  var b_counter_data = _b_counter_data(sequelize, DataTypes);
  var b_culture = _b_culture(sequelize, DataTypes);
  var b_entity_usage = _b_entity_usage(sequelize, DataTypes);
  var b_event = _b_event(sequelize, DataTypes);
  var b_event_attachment = _b_event_attachment(sequelize, DataTypes);
  var b_event_log = _b_event_log(sequelize, DataTypes);
  var b_event_message = _b_event_message(sequelize, DataTypes);
  var b_event_message_attachment = _b_event_message_attachment(sequelize, DataTypes);
  var b_event_message_site = _b_event_message_site(sequelize, DataTypes);
  var b_event_type = _b_event_type(sequelize, DataTypes);
  var b_favorite = _b_favorite(sequelize, DataTypes);
  var b_file = _b_file(sequelize, DataTypes);
  var b_file_duplicate = _b_file_duplicate(sequelize, DataTypes);
  var b_file_hash = _b_file_hash(sequelize, DataTypes);
  var b_file_preview = _b_file_preview(sequelize, DataTypes);
  var b_file_search = _b_file_search(sequelize, DataTypes);
  var b_filters = _b_filters(sequelize, DataTypes);
  var b_finder_dest = _b_finder_dest(sequelize, DataTypes);
  var b_geoip_handlers = _b_geoip_handlers(sequelize, DataTypes);
  var b_group = _b_group(sequelize, DataTypes);
  var b_group_collection_task = _b_group_collection_task(sequelize, DataTypes);
  var b_group_subordinate = _b_group_subordinate(sequelize, DataTypes);
  var b_group_task = _b_group_task(sequelize, DataTypes);
  var b_hlblock_entity = _b_hlblock_entity(sequelize, DataTypes);
  var b_hlblock_entity_lang = _b_hlblock_entity_lang(sequelize, DataTypes);
  var b_hlblock_entity_rights = _b_hlblock_entity_rights(sequelize, DataTypes);
  var b_hot_keys = _b_hot_keys(sequelize, DataTypes);
  var b_hot_keys_code = _b_hot_keys_code(sequelize, DataTypes);
  var b_iblock = _b_iblock(sequelize, DataTypes);
  var b_iblock_cache = _b_iblock_cache(sequelize, DataTypes);
  var b_iblock_element = _b_iblock_element(sequelize, DataTypes);
  var b_iblock_element_iprop = _b_iblock_element_iprop(sequelize, DataTypes);
  var b_iblock_element_lock = _b_iblock_element_lock(sequelize, DataTypes);
  var b_iblock_element_prop_m11 = _b_iblock_element_prop_m11(sequelize, DataTypes);
  var b_iblock_element_prop_m12 = _b_iblock_element_prop_m12(sequelize, DataTypes);
  var b_iblock_element_prop_m13 = _b_iblock_element_prop_m13(sequelize, DataTypes);
  var b_iblock_element_prop_m14 = _b_iblock_element_prop_m14(sequelize, DataTypes);
  var b_iblock_element_prop_m15 = _b_iblock_element_prop_m15(sequelize, DataTypes);
  var b_iblock_element_prop_m22 = _b_iblock_element_prop_m22(sequelize, DataTypes);
  var b_iblock_element_prop_m3 = _b_iblock_element_prop_m3(sequelize, DataTypes);
  var b_iblock_element_prop_m38 = _b_iblock_element_prop_m38(sequelize, DataTypes);
  var b_iblock_element_prop_m9 = _b_iblock_element_prop_m9(sequelize, DataTypes);
  var b_iblock_element_prop_s11 = _b_iblock_element_prop_s11(sequelize, DataTypes);
  var b_iblock_element_prop_s12 = _b_iblock_element_prop_s12(sequelize, DataTypes);
  var b_iblock_element_prop_s13 = _b_iblock_element_prop_s13(sequelize, DataTypes);
  var b_iblock_element_prop_s14 = _b_iblock_element_prop_s14(sequelize, DataTypes);
  var b_iblock_element_prop_s15 = _b_iblock_element_prop_s15(sequelize, DataTypes);
  var b_iblock_element_prop_s22 = _b_iblock_element_prop_s22(sequelize, DataTypes);
  var b_iblock_element_prop_s3 = _b_iblock_element_prop_s3(sequelize, DataTypes);
  var b_iblock_element_prop_s38 = _b_iblock_element_prop_s38(sequelize, DataTypes);
  var b_iblock_element_prop_s9 = _b_iblock_element_prop_s9(sequelize, DataTypes);
  var b_iblock_element_property = _b_iblock_element_property(sequelize, DataTypes);
  var b_iblock_element_right = _b_iblock_element_right(sequelize, DataTypes);
  var b_iblock_fields = _b_iblock_fields(sequelize, DataTypes);
  var b_iblock_group = _b_iblock_group(sequelize, DataTypes);
  var b_iblock_iblock_iprop = _b_iblock_iblock_iprop(sequelize, DataTypes);
  var b_iblock_iproperty = _b_iblock_iproperty(sequelize, DataTypes);
  var b_iblock_messages = _b_iblock_messages(sequelize, DataTypes);
  var b_iblock_offers_tmp = _b_iblock_offers_tmp(sequelize, DataTypes);
  var b_iblock_property = _b_iblock_property(sequelize, DataTypes);
  var b_iblock_property_enum = _b_iblock_property_enum(sequelize, DataTypes);
  var b_iblock_property_feature = _b_iblock_property_feature(sequelize, DataTypes);
  var b_iblock_right = _b_iblock_right(sequelize, DataTypes);
  var b_iblock_rss = _b_iblock_rss(sequelize, DataTypes);
  var b_iblock_section = _b_iblock_section(sequelize, DataTypes);
  var b_iblock_section_element = _b_iblock_section_element(sequelize, DataTypes);
  var b_iblock_section_iprop = _b_iblock_section_iprop(sequelize, DataTypes);
  var b_iblock_section_property = _b_iblock_section_property(sequelize, DataTypes);
  var b_iblock_section_right = _b_iblock_section_right(sequelize, DataTypes);
  var b_iblock_sequence = _b_iblock_sequence(sequelize, DataTypes);
  var b_iblock_site = _b_iblock_site(sequelize, DataTypes);
  var b_iblock_type = _b_iblock_type(sequelize, DataTypes);
  var b_iblock_type_lang = _b_iblock_type_lang(sequelize, DataTypes);
  var b_landing = _b_landing(sequelize, DataTypes);
  var b_landing_binding = _b_landing_binding(sequelize, DataTypes);
  var b_landing_block = _b_landing_block(sequelize, DataTypes);
  var b_landing_chat = _b_landing_chat(sequelize, DataTypes);
  var b_landing_chat_binding = _b_landing_chat_binding(sequelize, DataTypes);
  var b_landing_cookies_agreement = _b_landing_cookies_agreement(sequelize, DataTypes);
  var b_landing_demo = _b_landing_demo(sequelize, DataTypes);
  var b_landing_designer_repo = _b_landing_designer_repo(sequelize, DataTypes);
  var b_landing_domain = _b_landing_domain(sequelize, DataTypes);
  var b_landing_entity_lock = _b_landing_entity_lock(sequelize, DataTypes);
  var b_landing_entity_rights = _b_landing_entity_rights(sequelize, DataTypes);
  var b_landing_file = _b_landing_file(sequelize, DataTypes);
  var b_landing_filter_block = _b_landing_filter_block(sequelize, DataTypes);
  var b_landing_filter_entity = _b_landing_filter_entity(sequelize, DataTypes);
  var b_landing_hook_data = _b_landing_hook_data(sequelize, DataTypes);
  var b_landing_placement = _b_landing_placement(sequelize, DataTypes);
  var b_landing_repo = _b_landing_repo(sequelize, DataTypes);
  var b_landing_role = _b_landing_role(sequelize, DataTypes);
  var b_landing_site = _b_landing_site(sequelize, DataTypes);
  var b_landing_syspage = _b_landing_syspage(sequelize, DataTypes);
  var b_landing_template = _b_landing_template(sequelize, DataTypes);
  var b_landing_template_ref = _b_landing_template_ref(sequelize, DataTypes);
  var b_landing_update_block = _b_landing_update_block(sequelize, DataTypes);
  var b_landing_urlchecker_host = _b_landing_urlchecker_host(sequelize, DataTypes);
  var b_landing_urlchecker_status = _b_landing_urlchecker_status(sequelize, DataTypes);
  var b_landing_urlchecker_whitelist = _b_landing_urlchecker_whitelist(sequelize, DataTypes);
  var b_landing_urlrewrite = _b_landing_urlrewrite(sequelize, DataTypes);
  var b_landing_view = _b_landing_view(sequelize, DataTypes);
  var b_lang = _b_lang(sequelize, DataTypes);
  var b_lang_domain = _b_lang_domain(sequelize, DataTypes);
  var b_language = _b_language(sequelize, DataTypes);
  var b_log_notification = _b_log_notification(sequelize, DataTypes);
  var b_log_notification_action = _b_log_notification_action(sequelize, DataTypes);
  var b_main_mail_blacklist = _b_main_mail_blacklist(sequelize, DataTypes);
  var b_main_mail_sender = _b_main_mail_sender(sequelize, DataTypes);
  var b_medialib_collection = _b_medialib_collection(sequelize, DataTypes);
  var b_medialib_collection_item = _b_medialib_collection_item(sequelize, DataTypes);
  var b_medialib_item = _b_medialib_item(sequelize, DataTypes);
  var b_medialib_type = _b_medialib_type(sequelize, DataTypes);
  var b_messageservice_message = _b_messageservice_message(sequelize, DataTypes);
  var b_messageservice_rest_app = _b_messageservice_rest_app(sequelize, DataTypes);
  var b_messageservice_rest_app_lang = _b_messageservice_rest_app_lang(sequelize, DataTypes);
  var b_module = _b_module(sequelize, DataTypes);
  var b_module_group = _b_module_group(sequelize, DataTypes);
  var b_module_to_module = _b_module_to_module(sequelize, DataTypes);
  var b_numerator = _b_numerator(sequelize, DataTypes);
  var b_numerator_sequence = _b_numerator_sequence(sequelize, DataTypes);
  var b_operation = _b_operation(sequelize, DataTypes);
  var b_option = _b_option(sequelize, DataTypes);
  var b_option_site = _b_option_site(sequelize, DataTypes);
  var b_perf_cache = _b_perf_cache(sequelize, DataTypes);
  var b_perf_cluster = _b_perf_cluster(sequelize, DataTypes);
  var b_perf_component = _b_perf_component(sequelize, DataTypes);
  var b_perf_error = _b_perf_error(sequelize, DataTypes);
  var b_perf_history = _b_perf_history(sequelize, DataTypes);
  var b_perf_hit = _b_perf_hit(sequelize, DataTypes);
  var b_perf_index_ban = _b_perf_index_ban(sequelize, DataTypes);
  var b_perf_index_complete = _b_perf_index_complete(sequelize, DataTypes);
  var b_perf_index_suggest = _b_perf_index_suggest(sequelize, DataTypes);
  var b_perf_index_suggest_sql = _b_perf_index_suggest_sql(sequelize, DataTypes);
  var b_perf_sql = _b_perf_sql(sequelize, DataTypes);
  var b_perf_sql_backtrace = _b_perf_sql_backtrace(sequelize, DataTypes);
  var b_perf_tab_column_stat = _b_perf_tab_column_stat(sequelize, DataTypes);
  var b_perf_tab_stat = _b_perf_tab_stat(sequelize, DataTypes);
  var b_perf_test = _b_perf_test(sequelize, DataTypes);
  var b_rating = _b_rating(sequelize, DataTypes);
  var b_rating_component = _b_rating_component(sequelize, DataTypes);
  var b_rating_component_results = _b_rating_component_results(sequelize, DataTypes);
  var b_rating_prepare = _b_rating_prepare(sequelize, DataTypes);
  var b_rating_results = _b_rating_results(sequelize, DataTypes);
  var b_rating_rule = _b_rating_rule(sequelize, DataTypes);
  var b_rating_rule_vetting = _b_rating_rule_vetting(sequelize, DataTypes);
  var b_rating_user = _b_rating_user(sequelize, DataTypes);
  var b_rating_vote = _b_rating_vote(sequelize, DataTypes);
  var b_rating_vote_group = _b_rating_vote_group(sequelize, DataTypes);
  var b_rating_voting = _b_rating_voting(sequelize, DataTypes);
  var b_rating_voting_prepare = _b_rating_voting_prepare(sequelize, DataTypes);
  var b_rating_voting_reaction = _b_rating_voting_reaction(sequelize, DataTypes);
  var b_rating_weight = _b_rating_weight(sequelize, DataTypes);
  var b_report_visual_report_configuration = _b_report_visual_report_configuration(sequelize, DataTypes);
  var b_report_visual_report_dashboard = _b_report_visual_report_dashboard(sequelize, DataTypes);
  var b_report_visual_report_dashboard_row = _b_report_visual_report_dashboard_row(sequelize, DataTypes);
  var b_report_visual_report_entity = _b_report_visual_report_entity(sequelize, DataTypes);
  var b_report_visual_report_entity_config = _b_report_visual_report_entity_config(sequelize, DataTypes);
  var b_report_visual_report_widget = _b_report_visual_report_widget(sequelize, DataTypes);
  var b_report_visual_report_widget_config = _b_report_visual_report_widget_config(sequelize, DataTypes);
  var b_rest_ap = _b_rest_ap(sequelize, DataTypes);
  var b_rest_ap_permission = _b_rest_ap_permission(sequelize, DataTypes);
  var b_rest_app = _b_rest_app(sequelize, DataTypes);
  var b_rest_app_lang = _b_rest_app_lang(sequelize, DataTypes);
  var b_rest_app_log = _b_rest_app_log(sequelize, DataTypes);
  var b_rest_configuration_storage = _b_rest_configuration_storage(sequelize, DataTypes);
  var b_rest_event = _b_rest_event(sequelize, DataTypes);
  var b_rest_event_offline = _b_rest_event_offline(sequelize, DataTypes);
  var b_rest_integration = _b_rest_integration(sequelize, DataTypes);
  var b_rest_log = _b_rest_log(sequelize, DataTypes);
  var b_rest_owner_entity = _b_rest_owner_entity(sequelize, DataTypes);
  var b_rest_placement = _b_rest_placement(sequelize, DataTypes);
  var b_rest_placement_lang = _b_rest_placement_lang(sequelize, DataTypes);
  var b_rest_stat = _b_rest_stat(sequelize, DataTypes);
  var b_rest_stat_app = _b_rest_stat_app(sequelize, DataTypes);
  var b_rest_stat_method = _b_rest_stat_method(sequelize, DataTypes);
  var b_rest_usage_entity = _b_rest_usage_entity(sequelize, DataTypes);
  var b_rest_usage_stat = _b_rest_usage_stat(sequelize, DataTypes);
  var b_sale_exchange_log = _b_sale_exchange_log(sequelize, DataTypes);
  var b_sale_order_payment_item = _b_sale_order_payment_item(sequelize, DataTypes);
  var b_sale_order_round = _b_sale_order_round(sequelize, DataTypes);
  var b_sale_ruspost_reliability = _b_sale_ruspost_reliability(sequelize, DataTypes);
  var b_search_content = _b_search_content(sequelize, DataTypes);
  var b_search_content_freq = _b_search_content_freq(sequelize, DataTypes);
  var b_search_content_param = _b_search_content_param(sequelize, DataTypes);
  var b_search_content_right = _b_search_content_right(sequelize, DataTypes);
  var b_search_content_site = _b_search_content_site(sequelize, DataTypes);
  var b_search_content_stem = _b_search_content_stem(sequelize, DataTypes);
  var b_search_content_text = _b_search_content_text(sequelize, DataTypes);
  var b_search_content_title = _b_search_content_title(sequelize, DataTypes);
  var b_search_custom_rank = _b_search_custom_rank(sequelize, DataTypes);
  var b_search_phrase = _b_search_phrase(sequelize, DataTypes);
  var b_search_stem = _b_search_stem(sequelize, DataTypes);
  var b_search_suggest = _b_search_suggest(sequelize, DataTypes);
  var b_search_tags = _b_search_tags(sequelize, DataTypes);
  var b_search_user_right = _b_search_user_right(sequelize, DataTypes);
  var b_sec_filter_mask = _b_sec_filter_mask(sequelize, DataTypes);
  var b_sec_frame_mask = _b_sec_frame_mask(sequelize, DataTypes);
  var b_sec_iprule = _b_sec_iprule(sequelize, DataTypes);
  var b_sec_iprule_excl_ip = _b_sec_iprule_excl_ip(sequelize, DataTypes);
  var b_sec_iprule_excl_mask = _b_sec_iprule_excl_mask(sequelize, DataTypes);
  var b_sec_iprule_incl_ip = _b_sec_iprule_incl_ip(sequelize, DataTypes);
  var b_sec_iprule_incl_mask = _b_sec_iprule_incl_mask(sequelize, DataTypes);
  var b_sec_recovery_codes = _b_sec_recovery_codes(sequelize, DataTypes);
  var b_sec_redirect_url = _b_sec_redirect_url(sequelize, DataTypes);
  var b_sec_session = _b_sec_session(sequelize, DataTypes);
  var b_sec_user = _b_sec_user(sequelize, DataTypes);
  var b_sec_virus = _b_sec_virus(sequelize, DataTypes);
  var b_sec_white_list = _b_sec_white_list(sequelize, DataTypes);
  var b_security_sitecheck = _b_security_sitecheck(sequelize, DataTypes);
  var b_seo_adv_autolog = _b_seo_adv_autolog(sequelize, DataTypes);
  var b_seo_adv_banner = _b_seo_adv_banner(sequelize, DataTypes);
  var b_seo_adv_campaign = _b_seo_adv_campaign(sequelize, DataTypes);
  var b_seo_adv_group = _b_seo_adv_group(sequelize, DataTypes);
  var b_seo_adv_link = _b_seo_adv_link(sequelize, DataTypes);
  var b_seo_adv_log = _b_seo_adv_log(sequelize, DataTypes);
  var b_seo_adv_order = _b_seo_adv_order(sequelize, DataTypes);
  var b_seo_adv_region = _b_seo_adv_region(sequelize, DataTypes);
  var b_seo_keywords = _b_seo_keywords(sequelize, DataTypes);
  var b_seo_search_engine = _b_seo_search_engine(sequelize, DataTypes);
  var b_seo_service_log = _b_seo_service_log(sequelize, DataTypes);
  var b_seo_service_queue = _b_seo_service_queue(sequelize, DataTypes);
  var b_seo_service_rtg_queue = _b_seo_service_rtg_queue(sequelize, DataTypes);
  var b_seo_service_subscription = _b_seo_service_subscription(sequelize, DataTypes);
  var b_seo_service_webhook = _b_seo_service_webhook(sequelize, DataTypes);
  var b_seo_sitemap = _b_seo_sitemap(sequelize, DataTypes);
  var b_seo_sitemap_entity = _b_seo_sitemap_entity(sequelize, DataTypes);
  var b_seo_sitemap_iblock = _b_seo_sitemap_iblock(sequelize, DataTypes);
  var b_seo_sitemap_runtime = _b_seo_sitemap_runtime(sequelize, DataTypes);
  var b_seo_yandex_direct_stat = _b_seo_yandex_direct_stat(sequelize, DataTypes);
  var b_short_uri = _b_short_uri(sequelize, DataTypes);
  var b_site_template = _b_site_template(sequelize, DataTypes);
  var b_sm_version_history = _b_sm_version_history(sequelize, DataTypes);
  var b_smile = _b_smile(sequelize, DataTypes);
  var b_smile_lang = _b_smile_lang(sequelize, DataTypes);
  var b_smile_set = _b_smile_set(sequelize, DataTypes);
  var b_sms_template = _b_sms_template(sequelize, DataTypes);
  var b_sms_template_site = _b_sms_template_site(sequelize, DataTypes);
  var b_socialservices_ap = _b_socialservices_ap(sequelize, DataTypes);
  var b_socialservices_contact = _b_socialservices_contact(sequelize, DataTypes);
  var b_socialservices_contact_connect = _b_socialservices_contact_connect(sequelize, DataTypes);
  var b_socialservices_message = _b_socialservices_message(sequelize, DataTypes);
  var b_socialservices_user = _b_socialservices_user(sequelize, DataTypes);
  var b_socialservices_user_link = _b_socialservices_user_link(sequelize, DataTypes);
  var b_socialservices_zoom_meeting = _b_socialservices_zoom_meeting(sequelize, DataTypes);
  var b_socialservices_zoom_meeting_recording = _b_socialservices_zoom_meeting_recording(sequelize, DataTypes);
  var b_sticker = _b_sticker(sequelize, DataTypes);
  var b_sticker_group_task = _b_sticker_group_task(sequelize, DataTypes);
  var b_task = _b_task(sequelize, DataTypes);
  var b_task_operation = _b_task_operation(sequelize, DataTypes);
  var b_translate_diff = _b_translate_diff(sequelize, DataTypes);
  var b_translate_file = _b_translate_file(sequelize, DataTypes);
  var b_translate_path = _b_translate_path(sequelize, DataTypes);
  var b_translate_path_lang = _b_translate_path_lang(sequelize, DataTypes);
  var b_translate_path_tree = _b_translate_path_tree(sequelize, DataTypes);
  var b_translate_phrase = _b_translate_phrase(sequelize, DataTypes);
  var b_ui_entity_editor_config = _b_ui_entity_editor_config(sequelize, DataTypes);
  var b_ui_entity_editor_config_ac = _b_ui_entity_editor_config_ac(sequelize, DataTypes);
  var b_undo = _b_undo(sequelize, DataTypes);
  var b_urlpreview_metadata = _b_urlpreview_metadata(sequelize, DataTypes);
  var b_urlpreview_route = _b_urlpreview_route(sequelize, DataTypes);
  var b_user = _b_user(sequelize, DataTypes);
  var b_user_access = _b_user_access(sequelize, DataTypes);
  var b_user_access_check = _b_user_access_check(sequelize, DataTypes);
  var b_user_auth_action = _b_user_auth_action(sequelize, DataTypes);
  var b_user_auth_code = _b_user_auth_code(sequelize, DataTypes);
  var b_user_counter = _b_user_counter(sequelize, DataTypes);
  var b_user_digest = _b_user_digest(sequelize, DataTypes);
  var b_user_field = _b_user_field(sequelize, DataTypes);
  var b_user_field_confirm = _b_user_field_confirm(sequelize, DataTypes);
  var b_user_field_enum = _b_user_field_enum(sequelize, DataTypes);
  var b_user_field_lang = _b_user_field_lang(sequelize, DataTypes);
  var b_user_field_permission = _b_user_field_permission(sequelize, DataTypes);
  var b_user_group = _b_user_group(sequelize, DataTypes);
  var b_user_hit_auth = _b_user_hit_auth(sequelize, DataTypes);
  var b_user_index = _b_user_index(sequelize, DataTypes);
  var b_user_index_selector = _b_user_index_selector(sequelize, DataTypes);
  var b_user_option = _b_user_option(sequelize, DataTypes);
  var b_user_password = _b_user_password(sequelize, DataTypes);
  var b_user_phone_auth = _b_user_phone_auth(sequelize, DataTypes);
  var b_user_profile_history = _b_user_profile_history(sequelize, DataTypes);
  var b_user_profile_record = _b_user_profile_record(sequelize, DataTypes);
  var b_user_session = _b_user_session(sequelize, DataTypes);
  var b_user_stored_auth = _b_user_stored_auth(sequelize, DataTypes);
  var b_utm_iblock_22_section = _b_utm_iblock_22_section(sequelize, DataTypes);
  var b_utm_iblock_9_section = _b_utm_iblock_9_section(sequelize, DataTypes);
  var b_utm_user = _b_utm_user(sequelize, DataTypes);
  var b_uts_iblock_22_section = _b_uts_iblock_22_section(sequelize, DataTypes);
  var b_uts_iblock_9_section = _b_uts_iblock_9_section(sequelize, DataTypes);
  var b_uts_user = _b_uts_user(sequelize, DataTypes);
  var b_xml_tree = _b_xml_tree(sequelize, DataTypes);
  var bx_db_migrations = _bx_db_migrations(sequelize, DataTypes);
  var course_registry = _course_registry(sequelize, DataTypes);
  var course_registry_stat = _course_registry_stat(sequelize, DataTypes);
  var event_program = _event_program(sequelize, DataTypes);
  var event_registry = _event_registry(sequelize, DataTypes);
  var event_registry_stat = _event_registry_stat(sequelize, DataTypes);
  var event_tags = _event_tags(sequelize, DataTypes);
  var iqsms_sender_list = _iqsms_sender_list(sequelize, DataTypes);
  var iqsms_sender_template = _iqsms_sender_template(sequelize, DataTypes);
  var iqsms_sender_template_site = _iqsms_sender_template_site(sequelize, DataTypes);
  var long_read = _long_read(sequelize, DataTypes);
  var long_read_uf_estimation = _long_read_uf_estimation(sequelize, DataTypes);
  var med_directions = _med_directions(sequelize, DataTypes);
  var module_options = _module_options(sequelize, DataTypes);
  var nmo_entity = _nmo_entity(sequelize, DataTypes);
  var oauth_access_tokens = _oauth_access_tokens(sequelize, DataTypes);
  var oauth_access_tokens_uf_scopes = _oauth_access_tokens_uf_scopes(sequelize, DataTypes);
  var oauth_auth_codes = _oauth_auth_codes(sequelize, DataTypes);
  var oauth_auth_codes_uf_scopes = _oauth_auth_codes_uf_scopes(sequelize, DataTypes);
  var oauth_clients = _oauth_clients(sequelize, DataTypes);
  var oauth_refresh_tokens = _oauth_refresh_tokens(sequelize, DataTypes);
  var oauth_scopes = _oauth_scopes(sequelize, DataTypes);
  var parce_prodoctorov = _parce_prodoctorov(sequelize, DataTypes);
  var parcedocdoc = _parcedocdoc(sequelize, DataTypes);
  var reg_region = _reg_region(sequelize, DataTypes);
  var streamopros = _streamopros(sequelize, DataTypes);
  var streamopros_uf_answer = _streamopros_uf_answer(sequelize, DataTypes);
  var test_answer_variants = _test_answer_variants(sequelize, DataTypes);
  var test_questions = _test_questions(sequelize, DataTypes);
  var test_results = _test_results(sequelize, DataTypes);
  var test_results_uf_answer = _test_results_uf_answer(sequelize, DataTypes);
  var test_tests = _test_tests(sequelize, DataTypes);
  var user_group_settings = _user_group_settings(sequelize, DataTypes);
  var user_log = _user_log(sequelize, DataTypes);
  var vslider = _vslider(sequelize, DataTypes);

  b_iblock_group.belongsTo(b_group, { as: "GROUP", foreignKey: "GROUP_ID"});
  b_group.hasMany(b_iblock_group, { as: "b_iblock_groups", foreignKey: "GROUP_ID"});
  b_iblock_element_right.belongsTo(b_iblock, { as: "IBLOCK", foreignKey: "IBLOCK_ID"});
  b_iblock.hasMany(b_iblock_element_right, { as: "b_iblock_element_rights", foreignKey: "IBLOCK_ID"});
  b_iblock_group.belongsTo(b_iblock, { as: "IBLOCK", foreignKey: "IBLOCK_ID"});
  b_iblock.hasMany(b_iblock_group, { as: "b_iblock_groups", foreignKey: "IBLOCK_ID"});
  b_iblock_property.belongsTo(b_iblock, { as: "IBLOCK", foreignKey: "IBLOCK_ID"});
  b_iblock.hasMany(b_iblock_property, { as: "b_iblock_properties", foreignKey: "IBLOCK_ID"});
  b_iblock_right.belongsTo(b_iblock, { as: "IBLOCK", foreignKey: "IBLOCK_ID"});
  b_iblock.hasMany(b_iblock_right, { as: "b_iblock_rights", foreignKey: "IBLOCK_ID"});
  b_iblock_section.belongsTo(b_iblock, { as: "IBLOCK", foreignKey: "IBLOCK_ID"});
  b_iblock.hasMany(b_iblock_section, { as: "b_iblock_sections", foreignKey: "IBLOCK_ID"});
  b_iblock_section_right.belongsTo(b_iblock, { as: "IBLOCK", foreignKey: "IBLOCK_ID"});
  b_iblock.hasMany(b_iblock_section_right, { as: "b_iblock_section_rights", foreignKey: "IBLOCK_ID"});
  b_iblock_element_lock.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasOne(b_iblock_element_lock, { as: "b_iblock_element_lock", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_m11.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasMany(b_iblock_element_prop_m11, { as: "b_iblock_element_prop_m11s", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_m3.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasMany(b_iblock_element_prop_m3, { as: "b_iblock_element_prop_m3s", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_m9.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasMany(b_iblock_element_prop_m9, { as: "b_iblock_element_prop_m9s", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_s11.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasOne(b_iblock_element_prop_s11, { as: "b_iblock_element_prop_s11", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_s3.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasOne(b_iblock_element_prop_s3, { as: "b_iblock_element_prop_s3", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_s9.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasOne(b_iblock_element_prop_s9, { as: "b_iblock_element_prop_s9", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_property.belongsTo(b_iblock_element, { as: "IBLOCK_ELEMENT", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element.hasMany(b_iblock_element_property, { as: "b_iblock_element_properties", foreignKey: "IBLOCK_ELEMENT_ID"});
  b_iblock_element_prop_m11.belongsTo(b_iblock_property, { as: "IBLOCK_PROPERTY", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_property.hasMany(b_iblock_element_prop_m11, { as: "b_iblock_element_prop_m11s", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_element_prop_m3.belongsTo(b_iblock_property, { as: "IBLOCK_PROPERTY", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_property.hasMany(b_iblock_element_prop_m3, { as: "b_iblock_element_prop_m3s", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_element_prop_m9.belongsTo(b_iblock_property, { as: "IBLOCK_PROPERTY", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_property.hasMany(b_iblock_element_prop_m9, { as: "b_iblock_element_prop_m9s", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_element_property.belongsTo(b_iblock_property, { as: "IBLOCK_PROPERTY", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_property.hasMany(b_iblock_element_property, { as: "b_iblock_element_properties", foreignKey: "IBLOCK_PROPERTY_ID"});
  b_iblock_element_right.belongsTo(b_iblock_right, { as: "RIGHT", foreignKey: "RIGHT_ID"});
  b_iblock_right.hasMany(b_iblock_element_right, { as: "b_iblock_element_rights", foreignKey: "RIGHT_ID"});
  b_iblock_section_right.belongsTo(b_iblock_right, { as: "RIGHT", foreignKey: "RIGHT_ID"});
  b_iblock_right.hasMany(b_iblock_section_right, { as: "b_iblock_section_rights", foreignKey: "RIGHT_ID"});
  b_iblock_section.belongsTo(b_iblock_section, { as: "IBLOCK_SECTION", foreignKey: "IBLOCK_SECTION_ID"});
  b_iblock_section.hasMany(b_iblock_section, { as: "b_iblock_sections", foreignKey: "IBLOCK_SECTION_ID"});
  b_iblock.belongsTo(b_iblock_type, { as: "IBLOCK_TYPE", foreignKey: "IBLOCK_TYPE_ID"});
  b_iblock_type.hasMany(b_iblock, { as: "b_iblocks", foreignKey: "IBLOCK_TYPE_ID"});
  b_iblock.belongsTo(b_lang, { as: "LID_b_lang", foreignKey: "LID"});
  b_lang.hasMany(b_iblock, { as: "b_iblocks", foreignKey: "LID"});
  b_iblock_right.belongsTo(b_task, { as: "TASK", foreignKey: "TASK_ID"});
  b_task.hasMany(b_iblock_right, { as: "b_iblock_rights", foreignKey: "TASK_ID"});

  return {
    answer_active,
    b_admin_notify,
    b_admin_notify_lang,
    b_agent,
    b_app_password,
    b_b24connector_button_site,
    b_b24connector_buttons,
    b_bitrixcloud_option,
    b_cache_tag,
    b_captcha,
    b_catalog_rounding,
    b_checklist,
    b_clouds_copy_queue,
    b_clouds_delete_queue,
    b_clouds_file_bucket,
    b_clouds_file_hash,
    b_clouds_file_resize,
    b_clouds_file_save,
    b_clouds_file_upload,
    b_component_params,
    b_composite_log,
    b_composite_page,
    b_consent_agreement,
    b_consent_field,
    b_consent_user_consent,
    b_consent_user_consent_item,
    b_counter_data,
    b_culture,
    b_entity_usage,
    b_event,
    b_event_attachment,
    b_event_log,
    b_event_message,
    b_event_message_attachment,
    b_event_message_site,
    b_event_type,
    b_favorite,
    b_file,
    b_file_duplicate,
    b_file_hash,
    b_file_preview,
    b_file_search,
    b_filters,
    b_finder_dest,
    b_geoip_handlers,
    b_group,
    b_group_collection_task,
    b_group_subordinate,
    b_group_task,
    b_hlblock_entity,
    b_hlblock_entity_lang,
    b_hlblock_entity_rights,
    b_hot_keys,
    b_hot_keys_code,
    b_iblock,
    b_iblock_cache,
    b_iblock_element,
    b_iblock_element_iprop,
    b_iblock_element_lock,
    b_iblock_element_prop_m11,
    b_iblock_element_prop_m12,
    b_iblock_element_prop_m13,
    b_iblock_element_prop_m14,
    b_iblock_element_prop_m15,
    b_iblock_element_prop_m22,
    b_iblock_element_prop_m3,
    b_iblock_element_prop_m38,
    b_iblock_element_prop_m9,
    b_iblock_element_prop_s11,
    b_iblock_element_prop_s12,
    b_iblock_element_prop_s13,
    b_iblock_element_prop_s14,
    b_iblock_element_prop_s15,
    b_iblock_element_prop_s22,
    b_iblock_element_prop_s3,
    b_iblock_element_prop_s38,
    b_iblock_element_prop_s9,
    b_iblock_element_property,
    b_iblock_element_right,
    b_iblock_fields,
    b_iblock_group,
    b_iblock_iblock_iprop,
    b_iblock_iproperty,
    b_iblock_messages,
    b_iblock_offers_tmp,
    b_iblock_property,
    b_iblock_property_enum,
    b_iblock_property_feature,
    b_iblock_right,
    b_iblock_rss,
    b_iblock_section,
    b_iblock_section_element,
    b_iblock_section_iprop,
    b_iblock_section_property,
    b_iblock_section_right,
    b_iblock_sequence,
    b_iblock_site,
    b_iblock_type,
    b_iblock_type_lang,
    b_landing,
    b_landing_binding,
    b_landing_block,
    b_landing_chat,
    b_landing_chat_binding,
    b_landing_cookies_agreement,
    b_landing_demo,
    b_landing_designer_repo,
    b_landing_domain,
    b_landing_entity_lock,
    b_landing_entity_rights,
    b_landing_file,
    b_landing_filter_block,
    b_landing_filter_entity,
    b_landing_hook_data,
    b_landing_placement,
    b_landing_repo,
    b_landing_role,
    b_landing_site,
    b_landing_syspage,
    b_landing_template,
    b_landing_template_ref,
    b_landing_update_block,
    b_landing_urlchecker_host,
    b_landing_urlchecker_status,
    b_landing_urlchecker_whitelist,
    b_landing_urlrewrite,
    b_landing_view,
    b_lang,
    b_lang_domain,
    b_language,
    b_log_notification,
    b_log_notification_action,
    b_main_mail_blacklist,
    b_main_mail_sender,
    b_medialib_collection,
    b_medialib_collection_item,
    b_medialib_item,
    b_medialib_type,
    b_messageservice_message,
    b_messageservice_rest_app,
    b_messageservice_rest_app_lang,
    b_module,
    b_module_group,
    b_module_to_module,
    b_numerator,
    b_numerator_sequence,
    b_operation,
    b_option,
    b_option_site,
    b_perf_cache,
    b_perf_cluster,
    b_perf_component,
    b_perf_error,
    b_perf_history,
    b_perf_hit,
    b_perf_index_ban,
    b_perf_index_complete,
    b_perf_index_suggest,
    b_perf_index_suggest_sql,
    b_perf_sql,
    b_perf_sql_backtrace,
    b_perf_tab_column_stat,
    b_perf_tab_stat,
    b_perf_test,
    b_rating,
    b_rating_component,
    b_rating_component_results,
    b_rating_prepare,
    b_rating_results,
    b_rating_rule,
    b_rating_rule_vetting,
    b_rating_user,
    b_rating_vote,
    b_rating_vote_group,
    b_rating_voting,
    b_rating_voting_prepare,
    b_rating_voting_reaction,
    b_rating_weight,
    b_report_visual_report_configuration,
    b_report_visual_report_dashboard,
    b_report_visual_report_dashboard_row,
    b_report_visual_report_entity,
    b_report_visual_report_entity_config,
    b_report_visual_report_widget,
    b_report_visual_report_widget_config,
    b_rest_ap,
    b_rest_ap_permission,
    b_rest_app,
    b_rest_app_lang,
    b_rest_app_log,
    b_rest_configuration_storage,
    b_rest_event,
    b_rest_event_offline,
    b_rest_integration,
    b_rest_log,
    b_rest_owner_entity,
    b_rest_placement,
    b_rest_placement_lang,
    b_rest_stat,
    b_rest_stat_app,
    b_rest_stat_method,
    b_rest_usage_entity,
    b_rest_usage_stat,
    b_sale_exchange_log,
    b_sale_order_payment_item,
    b_sale_order_round,
    b_sale_ruspost_reliability,
    b_search_content,
    b_search_content_freq,
    b_search_content_param,
    b_search_content_right,
    b_search_content_site,
    b_search_content_stem,
    b_search_content_text,
    b_search_content_title,
    b_search_custom_rank,
    b_search_phrase,
    b_search_stem,
    b_search_suggest,
    b_search_tags,
    b_search_user_right,
    b_sec_filter_mask,
    b_sec_frame_mask,
    b_sec_iprule,
    b_sec_iprule_excl_ip,
    b_sec_iprule_excl_mask,
    b_sec_iprule_incl_ip,
    b_sec_iprule_incl_mask,
    b_sec_recovery_codes,
    b_sec_redirect_url,
    b_sec_session,
    b_sec_user,
    b_sec_virus,
    b_sec_white_list,
    b_security_sitecheck,
    b_seo_adv_autolog,
    b_seo_adv_banner,
    b_seo_adv_campaign,
    b_seo_adv_group,
    b_seo_adv_link,
    b_seo_adv_log,
    b_seo_adv_order,
    b_seo_adv_region,
    b_seo_keywords,
    b_seo_search_engine,
    b_seo_service_log,
    b_seo_service_queue,
    b_seo_service_rtg_queue,
    b_seo_service_subscription,
    b_seo_service_webhook,
    b_seo_sitemap,
    b_seo_sitemap_entity,
    b_seo_sitemap_iblock,
    b_seo_sitemap_runtime,
    b_seo_yandex_direct_stat,
    b_short_uri,
    b_site_template,
    b_sm_version_history,
    b_smile,
    b_smile_lang,
    b_smile_set,
    b_sms_template,
    b_sms_template_site,
    b_socialservices_ap,
    b_socialservices_contact,
    b_socialservices_contact_connect,
    b_socialservices_message,
    b_socialservices_user,
    b_socialservices_user_link,
    b_socialservices_zoom_meeting,
    b_socialservices_zoom_meeting_recording,
    b_sticker,
    b_sticker_group_task,
    b_task,
    b_task_operation,
    b_translate_diff,
    b_translate_file,
    b_translate_path,
    b_translate_path_lang,
    b_translate_path_tree,
    b_translate_phrase,
    b_ui_entity_editor_config,
    b_ui_entity_editor_config_ac,
    b_undo,
    b_urlpreview_metadata,
    b_urlpreview_route,
    b_user,
    b_user_access,
    b_user_access_check,
    b_user_auth_action,
    b_user_auth_code,
    b_user_counter,
    b_user_digest,
    b_user_field,
    b_user_field_confirm,
    b_user_field_enum,
    b_user_field_lang,
    b_user_field_permission,
    b_user_group,
    b_user_hit_auth,
    b_user_index,
    b_user_index_selector,
    b_user_option,
    b_user_password,
    b_user_phone_auth,
    b_user_profile_history,
    b_user_profile_record,
    b_user_session,
    b_user_stored_auth,
    b_utm_iblock_22_section,
    b_utm_iblock_9_section,
    b_utm_user,
    b_uts_iblock_22_section,
    b_uts_iblock_9_section,
    b_uts_user,
    b_xml_tree,
    bx_db_migrations,
    course_registry,
    course_registry_stat,
    event_program,
    event_registry,
    event_registry_stat,
    event_tags,
    iqsms_sender_list,
    iqsms_sender_template,
    iqsms_sender_template_site,
    long_read,
    long_read_uf_estimation,
    med_directions,
    module_options,
    nmo_entity,
    oauth_access_tokens,
    oauth_access_tokens_uf_scopes,
    oauth_auth_codes,
    oauth_auth_codes_uf_scopes,
    oauth_clients,
    oauth_refresh_tokens,
    oauth_scopes,
    parce_prodoctorov,
    parcedocdoc,
    reg_region,
    streamopros,
    streamopros_uf_answer,
    test_answer_variants,
    test_questions,
    test_results,
    test_results_uf_answer,
    test_tests,
    user_group_settings,
    user_log,
    vslider,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
