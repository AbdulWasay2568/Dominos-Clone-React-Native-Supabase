import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
// import { colors } from '../../../constants';

export const getStyles = () => {
  return StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.white,
        paddingHorizontal: moderateScale(24),
      },
      body: {
        // backgroundColor: colors.white,
        flex: 1,
        marginBottom: moderateVerticalScale(24),
      },
    text: {
      fontWeight: '700',
      fontSize: moderateScale(20),
      // color: colors.primaryColor,
    },
    button: {
        bottom: moderateVerticalScale(29),
        width: '100%',
      },
      itemContainer: {
        borderWidth: 1,
        // borderColor: colors.headerWidth,
        padding: moderateScale(12),
        borderRadius: moderateScale(10),
        marginBottom: moderateVerticalScale(16),
        gap:moderateVerticalScale(16),
      },
      Label:
      {
        fontWeight: '700',
        fontSize: moderateScale(16),
        // color: colors.secondaryColor, 
        gap:moderateVerticalScale(16),
      },
      summary:{
        fontWeight: '500',
        fontSize: moderateScale(14),
        // color: colors.secondaryColor,
      },
      Total:{
        fontWeight: '700',
        fontSize: moderateScale(14),
        // color: colors.primaryColor,
      },
      SummaryContainer:
      {
        flexDirection: 'row',
        justifyContent:'space-between'
        },
      line: {
        height: 1,
        // backgroundColor: colors.lightGray,
        marginVertical: moderateVerticalScale(10),
      },
  });
};