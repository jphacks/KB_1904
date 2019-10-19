# frozen_string_literal: true

class BaseSerializer < ActiveModel::Serializer
  attributes :id, :type

  def type
    object.class.name.underscore.pluralize
  end
end
