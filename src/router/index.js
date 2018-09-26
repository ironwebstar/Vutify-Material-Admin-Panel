import Vue from 'vue';
import Router from 'vue-router';
import AppHome from '@/components/AppHome';
import AppLogin from '@/components/AppLogin';
import ForgotPassword from '@/components/ForgotPassword';
import AccessDenied from '@/pages/AccessDenied';
import NotFound from '@/pages/NotFound';
import ServerError from '@/pages/ServerError';
import PaymentForm from '@/components/widgets/forms/PaymentForm';
import EventForm from '@/components/widgets/forms/EventForm';
import ShipForm from '@/components/widgets/forms/ShipForm';
import Checkbox from '@/components/widgets/forms/Checkbox';
import RadioButtons from '@/components/widgets/forms/RadioButtons';
import TextFields from '@/components/widgets/forms/TextFields';
import PDFDownload from '@/components/widgets/utils/PDFDownload';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      meta: {
        public: true,
      },
      redirect: {
        path: '/404'
      }
    },
    {
      path: '',
      name: 'AppHome',
      component: AppHome

    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin,
      meta: {
        public: true,
      },
    },
    {
      path: '/forget_password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        public: true,
      },
    },
    {
      path: '/403',
      name: 'AccessDenied',
      component: AccessDenied,
      meta: {
        public: true,
      },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: {
        public: true,
      },
    },
    {
      path: '/500',
      name: 'ServerError',
      component: ServerError,
      meta: {
        public: true,
      },
    },
    {
      path: '/forms/payment_form',
      name: 'Form/PaymentForm',
      component: () => import(
        `@/components/widgets/forms/PaymentForm`
      )
    },
    {
      path: '/forms/event_form',
      name: 'Form/EventForm',
      component: () => import(
        `@/components/widgets/forms/EventForm`
      )
    },
    {
      path: '/forms/ship_form',
      name: 'Form/ShippingForm',
      component: () => import(
        `@/components/widgets/forms/ShipForm`
      )
    },
    {
      path: '/forms/checkbox',
      name: 'Form/Checkbox',
      component: () => import(
        `@/components/widgets/forms/Checkbox`
      )
    },
    {
      path: '/forms/radiobuttons',
      name: 'Form/RadioButtons',
      component: () => import(
        `@/components/widgets/forms/RadioButtons`
      )
    },
    {
      path: '/forms/switches',
      name: 'Form/Switches',
      component: () => import(
        `@/components/widgets/forms/Switches`
      )
    },
    {
      path: '/forms/single_selection',
      name: 'Form/SingleSelection',
      component: () => import(
        `@/components/widgets/forms/SingleSelection`
      )
    },
    {
      path: '/forms/multi_selection',
      name: 'Form/MultiSelection',
      component: () => import(
        `@/components/widgets/forms/MultiSelection`
      )
    },
    {
      path: '/forms/text_fields',
      name: 'Form/TextFields',
      component: () => import(
        `@/components/widgets/forms/TextFields`
      )
    },
    {
      path: '/Utils/pdf_download',
      name: 'Utils/PDFDownload',
      component: () => import(
        `@/components/widgets/utils/PDFDownload`
      )
    },
    {
      path: '/widget/datatable',
      name: 'Widgets/Datatable',
      component: () => import(
        `@/components/widgets/tables/Datatable`
      )
    },
    {
      path: '/widget/search_table',
      name: 'Widgets/SearchTable',
      component: () => import(
        `@/components/widgets/tables/SearchTable`
      )
    }

  ]
});
