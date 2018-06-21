'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardStyle = require('./../Style/CardStyle');

var _DefaultButton = require('./../Button/DefaultButton');

var _DefaultButton2 = _interopRequireDefault(_DefaultButton);

var _Button = require('./../Button');

var _Button2 = _interopRequireDefault(_Button);

var _man = require('./../../assets/icons/man.svg');

var _man2 = _interopRequireDefault(_man);

var _currency = require('./../../assets/icons/currency.svg');

var _currency2 = _interopRequireDefault(_currency);

var _pin = require('./../../assets/icons/pin.svg');

var _pin2 = _interopRequireDefault(_pin);

var _clock = require('./../../assets/icons/clock.svg');

var _clock2 = _interopRequireDefault(_clock);

var _share = require('./../../assets/icons/share.svg');

var _share2 = _interopRequireDefault(_share);

var _star = require('./../../assets/icons/star.svg');

var _star2 = _interopRequireDefault(_star);

var _navigate = require('./../../assets/icons/navigate.svg');

var _navigate2 = _interopRequireDefault(_navigate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobCard = function JobCard(_ref) {
  var FeaturedImage = _ref.FeaturedImage,
      FeaturedLabel = _ref.FeaturedLabel,
      CompanyLogo = _ref.CompanyLogo,
      CompanyName = _ref.CompanyName,
      JobTitle = _ref.JobTitle,
      JobCategory = _ref.JobCategory,
      JobSalary = _ref.JobSalary,
      JobLocation = _ref.JobLocation,
      JobType = _ref.JobType;
  return _react2.default.createElement(
    _CardStyle.JobCardContainer,
    null,
    _react2.default.createElement(
      _CardStyle.Header,
      { FeaturedImage: FeaturedImage },
      _react2.default.createElement(
        'label',
        null,
        FeaturedLabel
      )
    ),
    _react2.default.createElement(
      _CardStyle.Body,
      null,
      _react2.default.createElement(
        _CardStyle.CompanyWrapper,
        null,
        _react2.default.createElement(
          _CardStyle.CompanyImageWrapper,
          null,
          _react2.default.createElement('img', { src: CompanyLogo })
        ),
        _react2.default.createElement(
          _CardStyle.Company,
          null,
          _react2.default.createElement(
            'label',
            null,
            JobTitle
          ),
          _react2.default.createElement(
            'span',
            null,
            CompanyName
          )
        )
      ),
      _react2.default.createElement(
        _CardStyle.JobDetail,
        null,
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('img', { src: _man2.default }),
          ' ',
          JobCategory
        ),
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('img', { src: _currency2.default }),
          ' ',
          JobSalary
        ),
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('img', { src: _pin2.default }),
          ' ',
          JobLocation
        ),
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('img', { src: _clock2.default }),
          ' ',
          JobType
        )
      ),
      _react2.default.createElement(
        _CardStyle.JobDescription,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Relentless. College Dropouts. Venture-backed. Straits Times called us the "Stuff of Many Singaporeans Parents\' Nightmares", due to our "fundamental naughtiness and healthy disrespect for rules\u201D. We were nearly flung into military prison for rebelling against irrational rules. Grow fast, dare to do what we love, and break conventions. That\u2019s how we started, that\'s how we roll here at this crazy company ;)'
        )
      )
    ),
    _react2.default.createElement(
      _CardStyle.Footer,
      null,
      _react2.default.createElement(
        _DefaultButton2.default,
        { icon: _share2.default },
        'Share'
      ),
      _react2.default.createElement(
        _DefaultButton2.default,
        { icon: _star2.default },
        'Save'
      ),
      _react2.default.createElement(
        _Button2.default,
        { variant: 'job' },
        'Apply'
      )
    )
  );
};
exports.default = JobCard;