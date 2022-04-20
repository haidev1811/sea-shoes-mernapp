# Custom Font Installer 
# by nongthaihoang @ xda

[ ! $MAGISKTMP ] && MAGISKTMP=$(magisk --path)/.magisk
[ -d $MAGISKTMP ] && ORIGDIR=$MAGISKTMP/mirror
FONTDIR=$MODPATH/fonts
SYSFONT=$MODPATH/system/fonts
PRDFONT=$MODPATH/system/product/fonts
SYSETC=$MODPATH/system/etc
SYSXML=$SYSETC/fonts.xml
MODPROP=$MODPATH/module.prop
mkdir -p $SYSFONT $SYSETC $PRDFONT

patch() {
	if [ -f $ORIGDIR/system/etc/fonts.xml ]; then
		if ! grep -q 'family >' /system/etc/fonts.xml; then
			find /data/adb/modules/ -type f -name fonts*xml -exec rm {} \;
			false | cp -i /system/etc/fonts.xml $SYSXML && ver !
		else
			false | cp -i $ORIGDIR/system/etc/fonts.xml $SYSXML 
		fi
	else
		abort "! $ORIGDIR/system/etc/fonts.xml: file not found"
	fi
	DEFFONT=$(sed -n '/"sans-serif">/,/family>/p' $SYSXML | grep '\-Regular.' | sed 's/.*">//;s/-.*//' | tail -1)
	[ $DEFFONT ] || abort "! Unknown default font"
	if ! grep -q 'family >' $SYSXML; then
		sed -i '/"sans-serif">/,/family>/H;1,/family>/{/family>/G}' $SYSXML
		sed -i ':a;N;$!ba;s/name="sans-serif"//2' $SYSXML
	fi
}

headline() {
	cp $FONTDIR/hf/*ttf $SYSFONT
	sed -i "/\"sans-serif\">/,/family>/{s/$DEFFONT-M/M/;s/$DEFFONT-B/B/}" $SYSXML
}

body() {
	cp $FONTDIR/bf/*ttf $SYSFONT 
	sed -i "/\"sans-serif\">/,/family>/{s/$DEFFONT-T/T/;s/$DEFFONT-L/L/;s/$DEFFONT-R/R/;s/$DEFFONT-I/I/}" $SYSXML
}

condensed() {
	cp $FONTDIR/cf/*ttf $SYSFONT
	sed -i "s/RobotoC/C/" $SYSXML
}

full() { headline; body; condensed; }

text() {
	[ $HF -eq 2 ] && ( cp $FONTDIR/tx/hf/*ttf $SYSFONT; ver hftxt )
	[ $BF -eq 2 ] && ( cp $FONTDIR/tx/[bc]f/*ttf $SYSFONT; ver bftxt )
}

bold() {
	if [ $BOLD -eq 3 ]; then
		sed -i '/"sans-serif">/,/family>/{/400/d;/>Light\./{N;h;d};/MediumItalic/G;/>Black\./{N;h;d};/BoldItalic/G}' $SYSXML
		sed -i '/"sans-serif-condensed">/,/family>/{/400/d;/-Light\./{N;h;d};/MediumItalic/G}' $SYSXML
	else
		[ $BF -eq 2 ] && local bf=/tx
		local src=$FONTDIR$bf/bf/bd x=/25 && [ $BOLD -eq 2 ] && x=/50
		cp $src$x/*ttf $SYSFONT
	fi
	ver bld
}

legible() {
	cp $FONTDIR/bf/hl/*ttf $SYSFONT
	ver lgbl
}

rounded() {
	[ $BF -eq 2 ] && local bf=/tx
	local src=$FONTDIR$bf/bf/rd x && [ $BOLD -eq 1 ] && x=25 || { [ $BOLD -eq 2 ] && x=50; } || { $LEGIBLE && x=hl; }
	cp $src/Regular$x.ttf $SYSFONT/Regular.ttf
	ver rnd
}

clean_up() {
	rm -rf $FONTDIR $MODPATH/LICENSE $MODPATH/tools
	rmdir -p $PRDFONT $SYSETC
}

pixel() {
	if [ -f $ORIGDIR/product/fonts/GoogleSans-Regular.ttf ] || [ -f $ORIGDIR/system/product/fonts/GoogleSans-Regular.ttf ]; then
		local dest=$PRDFONT
	elif [ -f $ORIGDIR/system/fonts/GoogleSans-Regular.ttf ]; then
		local dest=$SYSFONT
	fi
	if [ $dest ]; then
		if [ $HF -eq 1 ]; then
			cp $FONTDIR/px/*ttf $dest
		else
			set BoldItalic Bold MediumItalic Medium
			for i do cp $SYSFONT/$i.ttf $dest/GoogleSans-$i.ttf; done
			cp $FONTDIR/tx/bf/Regular.ttf $dest/GoogleSans-Regular.ttf
			cp $FONTDIR/tx/bf/Italic.ttf $dest/GoogleSans-Italic.ttf
		fi
		if [ $BOLD -ne 0 ]; then
			if [ $BOLD -eq 3 ]; then
				cp $dest/GoogleSans-Medium.ttf $dest/GoogleSans-Regular.ttf
				cp $dest/GoogleSans-MediumItalic.ttf $dest/GoogleSans-Italic.ttf
			else
				[ $HF -eq 2 ] && local hf=/tx
				local src=$FONTDIR$hf/bf/bd x=/25 && [ $BOLD -eq 2 ] && x=/50
				cp $src$x/Regular.ttf $dest/GoogleSans-Regular.ttf
				cp $src$x/Italic.ttf $dest/GoogleSans-Italic.ttf
			fi
		fi
		ver pxl
	else
		false
	fi
}

oxygen() {
	if grep -q OnePlus $SYSXML; then
		if [ -f $ORIGDIR/system/etc/fonts_base.xml ]; then
			local oosxml=$SYSETC/fonts_base.xml
			cp $SYSXML $oosxml
			sed -i "/\"sans-serif\">/,/family>/s/$DEFFONT/Roboto/" $oosxml
		fi
	elif [ -f $ORIGDIR/system/fonts/SlateForOnePlus-Regular.ttf ]; then
		set Black Bold Medium Regular Light Thin
		for i do cp $SYSFONT/$i.ttf $SYSFONT/SlateForOnePlus-$i.ttf; done
		cp $SYSFONT/Regular.ttf $SYSFONT/SlateForOnePlus-Book.ttf
		ver oos
	else
		false
	fi
}

miui() {
	if grep -q miui $SYSXML; then
		sed -i '/"mipro"/,/family>/{/700/s/MiLanProVF/Bold/;/stylevalue="400"/d}' $SYSXML
		sed -i '/"mipro-regular"/,/family>/{/700/s/MiLanProVF/Medium/;/stylevalue="400"/d}' $SYSXML
		sed -i '/"mipro-medium"/,/family>/{/400/s/MiLanProVF/Medium/;/700/s/MiLanProVF/Bold/;/stylevalue/d}' $SYSXML
		sed -i '/"mipro-demibold"/,/family>/{/400/s/MiLanProVF/Medium/;/700/s/MiLanProVF/Bold/;/stylevalue/d}' $SYSXML
		sed -i '/"mipro-semibold"/,/family>/{/400/s/MiLanProVF/Medium/;/700/s/MiLanProVF/Bold/;/stylevalue/d}' $SYSXML
		sed -i '/"mipro-bold"/,/family>/{/400/s/MiLanProVF/Bold/;/700/s/MiLanProVF/Black/;/stylevalue/d}' $SYSXML
		sed -i '/"mipro-heavy"/,/family>/{/400/s/MiLanProVF/Black/;/stylevalue/d}' $SYSXML
		if [ $PART -eq 1 ]; then
			sed -i '/"mipro"/,/family>/{/400/s/MiLanProVF/Regular/;/stylevalue="340"/d}' $SYSXML
			sed -i '/"mipro-thin"/,/family>/{/400/s/MiLanProVF/Thin/;/700/s/MiLanProVF/Light/;/stylevalue/d}' $SYSXML
			sed -i '/"mipro-extralight"/,/family>/{/400/s/MiLanProVF/Thin/;/700/s/MiLanProVF/Light/;/stylevalue/d}' $SYSXML
			sed -i '/"mipro-light"/,/family>/{/400/s/MiLanProVF/Light/;/700/s/MiLanProVF/Regular/;/stylevalue/d}' $SYSXML
			sed -i '/"mipro-normal"/,/family>/{/400/s/MiLanProVF/Light/;/700/s/MiLanProVF/Regular/;/stylevalue/d}' $SYSXML
			sed -i '/"mipro-regular"/,/family>/{/400/s/MiLanProVF/Regular/;/stylevalue="340"/d}' $SYSXML
		fi	
		ver miui
	else
		false
	fi
}

lg() {
	local lg=false
	if grep -q lg-sans-serif $SYSXML; then
		sed -i '/"lg-sans-serif">/,/family>/{/"lg-sans-serif">/!d};/"sans-serif">/,/family>/{/"sans-serif">/!H};/"lg-sans-serif">/G' $SYSXML
		lg=true
	fi
	if [ -f $ORIGDIR/system/etc/fonts_lge.xml ]; then
		false | cp -i $ORIGDIR/system/etc/fonts_lge.xml $SYSETC
		local lgxml=$SYSETC/fonts_lge.xml
		sed -i '/"default_roboto">/,/family>/{s/Roboto-M/M/;s/Roboto-B/B/}' $lgxml
		if [ $PART -eq 1 ]; then
			sed -i '/"default_roboto">/,/family>/{s/Roboto-T/T/;s/Roboto-L/L/;s/Roboto-R/R/;s/Roboto-I/I/}' $lgxml
			[ $BOLD -eq 3 ] && sed -i '/"default_roboto">/,/family>/{/400/d;/>Light\./{N;h;d};/MediumItalic/G}' $lgxml
		fi
		lg=true
	fi
	$lg && ver lg || false
}

samsung() {
	if grep -q Samsung $SYSXML; then
		sed -i 's/SECRobotoLight-Bold/Medium/' $SYSXML
		[ $PART -eq 1 ] && sed -i 's/SECRobotoLight-//;s/SECCondensed-/Condensed-/' $SYSXML
		ver sam
	else
		false
	fi
}

realme() {
	if grep -q COLOROS $SYSXML; then
		if [ -f $ORIGDIR/system/etc/fonts_base.xml ]; then
			local ruixml=$SYSETC/fonts_base.xml
			cp $SYSXML $ruixml
			sed -i "/\"sans-serif\">/,/family>/s/$DEFFONT/Roboto/" $ruixml
		fi
		ver rui
	else
		false
	fi
}

rom() { pixel || oxygen || miui || samsung || lg || realme; }

ver() { sed -i 3"s/$/-$1&/" $MODPROP; }

### SELECTIONS ###
OPTION=false
PART=1
HF=1
BF=1
BOLD=0
LEGIBLE=false
ROUNDED=false

. $MODPATH/tools/selector.sh

if [ $SEL ]; then
	OPTION=true	
	ui_print "  "
	ui_print "- CUSTOMIZATIONS -"
	sleep 0.5
fi

if $OPTION; then

	ui_print "  "
	ui_print "- WHICH to install?"
	ui_print "  $KEY1 = Next Option; $KEY2 = Ok"
	ui_print "  "
	ui_print "  1. Full"
	ui_print "  2. Headline"
	ui_print "  "
	ui_print "  Select:"
	while :; do
		ui_print "  $PART"
		$SEL && PART=$((PART + 1)) || break
		[ $PART -gt 2 ] && PART=1
	done
	ui_print "  "
	ui_print "  Selected: $PART"
	sleep 0.4

	ui_print "  "
	ui_print "- HEADLINE font?"
	ui_print "  $KEY1 = Next Option; $KEY2 = OK"
	ui_print "  "
	ui_print "  1. Default"
	ui_print "  2. Text"
	ui_print "  "
	ui_print "  Select:"
	while :; do
		ui_print "  $HF"
		$SEL && HF=$((HF + 1)) || break
		[ $HF -gt 2 ] && HF=1
	done
	ui_print "  "
	ui_print "  Selected: $HF"
	sleep 0.4

	if [ $PART -eq 1 ]; then

		ui_print "  "
		ui_print "- BODY font?"
		ui_print "  $KEY1 = Next Option; $KEY2 = OK"
		ui_print "  "
		ui_print "  1. Default"
		ui_print "  2. Text"
		ui_print "  "
		ui_print "  Select:"
		while :; do
			ui_print "  $BF"
			$SEL && BF=$((BF + 1)) || break
			[ $BF -gt 2 ] && BF=1
		done
		ui_print "  "
		ui_print "  Selected: $BF"
		sleep 0.4

		ui_print "  "
		ui_print "- Use BOLD font?"
		ui_print "  $KEY1 = Yes; $KEY2 = No"
		ui_print "  "
		$SEL && { BOLD=1; ui_print "  Selected: Yes"; } ||  ui_print "  Selected: No"
		sleep 0.4

		if [ $BOLD -eq 1 ]; then
			ui_print "  "
			ui_print "- How much BOLD?"
			ui_print "  $KEY1 = Next Option; $KEY2 = OK"
			ui_print "  "
			ui_print "  1. Light"
			ui_print "  2. Medium"
			[ $HF -eq $BF ] && ui_print "  3. Strong"
			ui_print "  "
			ui_print "  Select:"
			while :; do
				ui_print "  $BOLD"
				$SEL && BOLD=$((BOLD + 1)) || break
				([ $BOLD -gt 2 ] && [ $HF -ne $BF ] || [ $BOLD -gt 3 ]) && BOLD=1
			done
			ui_print "  "
			ui_print "  Selected: $BOLD"
			sleep 0.4
		fi

		if [ $BOLD -ne 3 ]; then
			ui_print "  "
			ui_print "- Rounded Corners?"
			ui_print "  $KEY1 = Yes; $KEY2 = No"
			ui_print "  "
			$SEL && { ROUNDED=true; ui_print "  Selected: Yes"; } || ui_print "  Selected: No"	
			sleep 0.4
		fi

		if [ $BF -eq 1 ] && [ $BOLD -eq 0 ]; then
			ui_print "  "
			ui_print "- High Legibility?"
			ui_print "  $KEY1 = Yes; $KEY2 = No"
			ui_print "  "
			$SEL && { LEGIBLE=true; ui_print "  Selected: Yes"; } || ui_print "  Selected: No"	
			sleep 0.4
		fi

	fi #PART1
fi #OPTIONS

### INSTALLATION ###
ui_print "  "
ui_print "- Installing"
patch
[ $PART -eq 1 ] && full || ( headline; ver hf )
[ $HF -eq 2 ] || [ $BF -eq 2 ] && text
[ $BOLD -ne 0 ] && bold
$LEGIBLE && legible
$ROUNDED && rounded
rom

### CLEAN UP ###
ui_print "- Cleaning up"
clean_up
