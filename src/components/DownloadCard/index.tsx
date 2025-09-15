import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import DownloadButton from "../DownloadButton";

interface DownloadCardProps {
  title: string;
  titleColor: string;
  borderColor: string;
  mainButtonLabel: string;
  mainButtonHref: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  secondaryButtonGradient?: string;
}

export function DownloadCard({
  title,
  titleColor,
  borderColor,
  mainButtonLabel,
  mainButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  secondaryButtonGradient,
}: DownloadCardProps) {
  return (
    <Card
      sx={{
        bgcolor: "#23243a",
        border: `1.5px solid ${borderColor}`,
        borderRadius: 4,
        boxShadow: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: titleColor, fontWeight: 700, fontSize: { xs: 24, md: 32 }, mb: 2 }}
        >
          {title}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <DownloadButton
            fullWidth
            href={mainButtonHref}
            sx={{ mt: 0 }}
          >
            {mainButtonLabel}
          </DownloadButton>
        </Box>
        {secondaryButtonLabel && secondaryButtonHref && (
          <Box sx={{ width: '100%' }}>
            <Button
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: titleColor,
                color: titleColor,
                fontWeight: 700,
                background: secondaryButtonGradient || undefined,
              }}
              fullWidth
              href={secondaryButtonHref}
            >
              {secondaryButtonLabel}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
